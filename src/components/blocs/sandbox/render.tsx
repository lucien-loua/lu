'use client';

import type { ReactNode } from 'react';

type PreviewRenderProps = {
  children: ReactNode;
};

export const PreviewRender = ({ children }: PreviewRenderProps) => {
  return (
    <div className="relative flex size-full flex-col items-center justify-center gap-4 overflow-hidden p-3">
      <div className="-translate-y-px absolute top-3 right-0 left-0 border border-border/50 border-dashed" />
      <div className="absolute right-0 bottom-3 left-0 translate-y-px border border-border/50 border-dashed" />
      <div className="-translate-x-px absolute top-0 bottom-0 left-3 border border-border/50 border-dashed" />
      <div className="absolute top-0 right-3 bottom-0 translate-x-px border border-border/50 border-dashed" />
      {children}
    </div>
  );
};