import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type CounterProps = {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
};

export const Counter = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
}: CounterProps) => {
  const [count, setCount] = React.useState(initialValue);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const increment = () => {
    if (count < max) {
      setIsAnimating(true);
      setCount(prev => Math.min(prev + step, max));
      setTimeout(() => setIsAnimating(false), 200);
    }
  };

  const decrement = () => {
    if (count > min) {
      setIsAnimating(true);
      setCount(prev => Math.max(prev - step, min));
      setTimeout(() => setIsAnimating(false), 200);
    }
  };

  return (
    <div className="flex items-center justify-between w-2xs border bg-card p-4 rounded-lg">
      <Button
        variant="outline"
        size="icon"
        onClick={decrement}
        disabled={count <= min}
      >
        -
      </Button>
      <div
        className={cn(
          "min-w-[3rem] text-center text-2xl font-bold transition-all duration-200",
          isAnimating && "scale-110 text-primary"
        )}
      >
        {count}
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={increment}
        disabled={count >= max}
      >
        +
      </Button>
    </div>
  );
};

export default function CounterShowcase() {
  return (
    <section className="flex flex-col items-center gap-3 p-3">
      <Counter />
    </section>
  );
} 