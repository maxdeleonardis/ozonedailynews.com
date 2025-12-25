#!/bin/bash

# ObjectWire Backend Setup Script

echo "🚀 ObjectWire Backend Setup"
echo "=============================="
echo ""

# Check Python version
python_version=$(python3 --version 2>&1 | awk '{print $2}')
echo "✓ Python version: $python_version"

# Create virtual environment
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
    echo "✓ Virtual environment created"
else
    echo "✓ Virtual environment already exists"
fi

# Activate virtual environment
echo "🔌 Activating virtual environment..."
source venv/bin/activate

# Install dependencies
echo "📥 Installing dependencies..."
pip install --upgrade pip
pip install -r requirements.txt
echo "✓ Dependencies installed"

# Check for .env file
if [ ! -f ".env" ]; then
    echo "⚠️  No .env file found"
    echo "📝 Creating .env from example..."
    cp .env.example .env
    echo "✓ Created .env file"
    echo ""
    echo "⚠️  IMPORTANT: Edit .env file with your Supabase credentials!"
    echo "   1. Go to https://supabase.com"
    echo "   2. Create a project"
    echo "   3. Copy credentials from Settings → API"
    echo "   4. Update .env file"
    echo ""
else
    echo "✓ .env file exists"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Configure .env with Supabase credentials"
echo "  2. Run database schema in Supabase SQL Editor (see README.md)"
echo "  3. Start server: uvicorn main:app --reload"
echo ""
