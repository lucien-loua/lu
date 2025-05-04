import { cookies, draftMode } from 'next/headers';
export async function EndPreview() {
  const cookieStore = await cookies();
  const { isEnabled } = await draftMode();
  if (!isEnabled) return null;
  return (
    <div>
      Draft mode ({cookieStore.get('ks-branch')?.value}){' '}
      <form method="POST" action="/preview/end">
        <button className='px-2 py-1 rounded-md bg-white text-black'>End preview</button>
      </form>
    </div>
  );
}
