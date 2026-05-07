import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const BOOKING_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzW47o4qO3qjtcXJ8sWVxDkzKdyyV0UpuxWvQTIDVlhKMmC7n0uMp53p9RuvbDQ2iihag/exec';

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const name = String(body.name || '').trim();
  const phone = String(body.phone || '').trim();
  const email = String(body.email || '').trim();
  const concern = String(body.concern || '').trim();

  if (!name || !phone || !email || !concern) {
    return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
  }

  const payload = {
    name,
    phone,
    email,
    concern,
    submittedAt: new Date().toISOString(),
    userAgent: req.headers.get('user-agent') || '',
  };

  try {
    const res = await fetch(BOOKING_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    const text = await res.text();
    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: 'Upstream error', status: res.status, body: text },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : 'Network error' },
      { status: 502 }
    );
  }
}
