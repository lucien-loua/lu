"use client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { CodeIcon, EyeIcon } from 'lucide-react';
import { PreviewCode } from './code';
import { PreviewRender } from './render';
import React from 'react';

type PreviewProps = {
  showcase: string | null;
  type?: 'component' | 'block';
  code?: string;
};

export const SandBox = ({
  showcase = '',
  type = 'component',
  code = '',
}: PreviewProps) => {
  const [Component, setComponent] = React.useState<React.ComponentType | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [componentCode, setComponentCode] = React.useState(code);

  React.useEffect(() => {
    if (!showcase) {
      setError('No component to showcase');
      return;
    }

    import(`@/showcase/${showcase}.tsx`).then(
      (module) => {
        setComponent(() => module.default);
      }
    ).catch((error) => {
      console.error(`Failed to load example component: ${showcase}`, error);
      setError(`Failed to load component: ${showcase}`);
    });

    if (!code) {
      fetch(`/api/source?path=${showcase}`)
        .then(res => res.text())
        .then(sourceCode => {
          setComponentCode(sourceCode);
        })
        .catch(error => {
          console.error('Failed to load source code:', error);
        });
    }
  }, [showcase, code]);

  if (error) {
    return (
      <div className="p-4 text-destructive">
        {error}
      </div>
    );
  }

  if (!Component) {
    return (
      <div
        className={cn(
          'size-full overflow-hidden rounded-lg border bg-background',
          type === 'block' &&
          'max-h-[40rem] prose-code:border-none prose-code:p-0',
          type === 'component' && 'not-prose max-h-[32rem]',
        )}
      >
        <Tabs defaultValue="preview" className="h-32 gap-0">
          <TabsList className="w-full rounded-none border-b">
            <TabsTrigger value="code">
              <CodeIcon size={16} className="text-muted-foreground" />
              Code
            </TabsTrigger>
            <TabsTrigger value="preview">
              <EyeIcon size={16} className="text-muted-foreground" />
              Preview
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="code"
            className="size-full overflow-y-auto bg-background p-2"
          >
            <Skeleton className="size-full" />
          </TabsContent>
          <TabsContent
            value="preview"
            className={cn(
              'size-full',
              type === 'component' ? 'overflow-hidden' : 'overflow-auto p-2'
            )}
          >
            {type === 'block' ? (
              <Skeleton className="size-full" />
            ) : (
              <PreviewRender>
                <Skeleton className="size-full rounded-none" />
              </PreviewRender>
            )}
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'size-full overflow-hidden rounded-lg border bg-background',
        type === 'block' &&
        'max-h-[40rem] prose-code:border-none prose-code:p-0',
        type === 'component' && 'not-prose max-h-[32rem]',
      )}
    >
      <Tabs defaultValue="preview" className="size-full gap-0">
        <TabsList className="w-full rounded-none border-b">
          <TabsTrigger value="code">
            <CodeIcon size={16} className="text-muted-foreground" />
            Code
          </TabsTrigger>
          <TabsTrigger value="preview">
            <EyeIcon size={16} className="text-muted-foreground" />
            Preview
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="code"
          className="size-full overflow-y-auto bg-background"
        >
          <PreviewCode code={componentCode} language="tsx" filename="index.tsx" />
        </TabsContent>
        <TabsContent
          value="preview"
          className={cn(
            'size-full',
            type === 'component' ? 'overflow-hidden' : 'overflow-auto'
          )}
        >
          {type === 'block' ? (
            <Component />
          ) : (
            <PreviewRender>
              <Component />
            </PreviewRender>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};