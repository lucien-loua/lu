import path from 'node:path'
import { promises as fs } from 'node:fs';

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filePath = searchParams.get('path');

  if (!filePath) {
    return NextResponse.json({ error: 'No path provided' }, { status: 400 });
  }

  try {
    const fullPath = path.join(process.cwd(), 'src', 'examples', `${filePath}.tsx`);
    const sourceCode = await fs.readFile(fullPath, 'utf-8');
    return new NextResponse(sourceCode);
  } catch {
    return NextResponse.json({ error: 'Failed to read source file' }, { status: 500 });
  }
} 