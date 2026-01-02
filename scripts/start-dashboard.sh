#!/bin/bash
# Quick start script for Objectwire Dashboard

echo "🚀 Starting Objectwire Dashboard..."
echo ""

# Kill any existing processes
pkill -f "uvicorn main:app" 2>/dev/null
pkill -f "next dev" 2>/dev/null
sleep 2

# Start backend
echo "📡 Starting Backend API (port 8000)..."
cd backend
/home/jack/Documents/Objectwire/Objectwire-Frontend/.venv/bin/python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000 > /tmp/backend.log 2>&1 &
BACKEND_PID=$!
cd ..

sleep 3

# Test backend
if curl -s http://localhost:8000/api/dashboard/metrics > /dev/null; then
    echo "✅ Backend running successfully"
else
    echo "❌ Backend failed to start"
    cat /tmp/backend.log
    exit 1
fi

# Start frontend
echo "⚛️  Starting Next.js Frontend (port 3000)..."
npm run dev > /tmp/frontend.log 2>&1 &
FRONTEND_PID=$!

sleep 8

# Check frontend
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Frontend running successfully"
else
    echo "❌ Frontend failed to start"
    cat /tmp/frontend.log
    exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Objectwire Dashboard is READY!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📊 Dashboard:     http://localhost:3000/dashboard"
echo "🌐 Frontend:      http://localhost:3000"
echo "🔌 Backend API:   http://localhost:8000/api/docs"
echo ""
echo "📝 Logs:"
echo "   Backend:  tail -f /tmp/backend.log"
echo "   Frontend: tail -f /tmp/frontend.log"
echo ""
echo "🛑 To stop: pkill -f 'uvicorn' && pkill -f 'next dev'"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
