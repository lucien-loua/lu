import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

export default function LayoutExample() {
  return (
    <div className='w-full'>
      <Header />
      <div className='flex-1 p-4'>
        <h1>Hello</h1>
      </div>
      <Footer />
    </div>
  );
} 