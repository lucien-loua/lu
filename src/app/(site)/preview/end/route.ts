import { cookies, draftMode } from 'next/headers';

export async function POST(req: Request) {
  if (req.headers.get('origin') !== new URL(req.url).origin) {
    return new Response('Invalid origin', { status: 400 });
  }
  const referrer = req.headers.get('Referer');
  if (!referrer) {
    return new Response('Missing Referer', { status: 400 });
  }
  const draft = await draftMode()
  const cookieStore = await cookies()

  draft.disable();
  cookieStore.delete('ks-branch');
  return Response.redirect(referrer, 303);
}