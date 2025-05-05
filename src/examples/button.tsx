import { Button } from '@/components/ui/button';

export default function ButtonExample() {
  return (
    <div className="p-4 space-x-4">
      <Button>Default Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
    </div>
  );
} 