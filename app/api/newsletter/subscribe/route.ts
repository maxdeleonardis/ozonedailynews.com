import { NextRequest, NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import path from 'path';
import fs from 'fs';

// =============================================================================
// NEWSLETTER SUBSCRIBE — POST /api/newsletter/subscribe
// Appends subscriber email + metadata to data/newsletter-subscribers.xlsx
// =============================================================================

const DATA_DIR  = path.join(process.cwd(), 'data');
const XLSX_PATH = path.join(DATA_DIR, 'newsletter-subscribers.xlsx');

interface SubscriberRow {
  Email: string;
  SubscribedAt: string;    // ISO datetime
  Source: string;          // Referring article URL
  IP: string;              // Anonymised — last octet zeroed
}

function loadOrCreateWorkbook(): XLSX.WorkBook {
  if (fs.existsSync(XLSX_PATH)) {
    const buf = fs.readFileSync(XLSX_PATH);
    return XLSX.read(buf, { type: 'buffer' });
  }
  // New workbook with a header row
  const wb    = XLSX.utils.book_new();
  const ws    = XLSX.utils.aoa_to_sheet([['Email', 'SubscribedAt', 'Source', 'IP']]);
  XLSX.utils.book_append_sheet(wb, ws, 'Subscribers');
  return wb;
}

function anonIP(ip: string | null): string {
  if (!ip) return '';
  // Zero-out last octet for IPv4 (basic GDPR-friendly anonymisation)
  return ip.replace(/\.\d+$/, '.0');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email: string = (body?.email || '').trim().toLowerCase();

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Ensure data directory exists
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    const wb      = loadOrCreateWorkbook();
    const wsName  = wb.SheetNames[0];
    const ws      = wb.Sheets[wsName];

    // Check for duplicate in existing sheet
    const rows: SubscriberRow[] = XLSX.utils.sheet_to_json<SubscriberRow>(ws);
    const alreadySubscribed = rows.some(r => r.Email?.toLowerCase() === email);
    if (alreadySubscribed) {
      return NextResponse.json({ message: "You're already subscribed!" }, { status: 200 });
    }

    // Append new row
    const newRow: SubscriberRow = {
      Email:        email,
      SubscribedAt: new Date().toISOString(),
      Source:       req.headers.get('referer') || '',
      IP:           anonIP(req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip')),
    };
    rows.push(newRow);

    // Rebuild sheet (preserves header)
    const updatedWs = XLSX.utils.json_to_sheet(rows, {
      header: ['Email', 'SubscribedAt', 'Source', 'IP'],
    });

    // Re-insert header row explicitly so it always appears first
    XLSX.utils.sheet_add_aoa(updatedWs, [['Email', 'SubscribedAt', 'Source', 'IP']], { origin: 'A1' });

    wb.Sheets[wsName] = updatedWs;

    // Write back to disk
    const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
    fs.writeFileSync(XLSX_PATH, buf);

    return NextResponse.json({ message: 'Subscribed! Thanks for joining.' }, { status: 200 });
  } catch (err) {
    console.error('[newsletter/subscribe]', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
