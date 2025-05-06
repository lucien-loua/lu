'use client';

import {
  type BundledLanguage,
  CodeBlock as CodeBlockUI,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
  type CodeBlockProps,
  CodeBlockSelect,
  CodeBlockSelectContent,
  CodeBlockSelectItem,
  CodeBlockSelectTrigger,
  CodeBlockSelectValue,
} from '@/components/ui/code-block';

type PCodeBlock = {
  code: string;
  language: string;
  filename: string;
  variant?: 'default' | 'compact';
};

export const CodeBlock = ({ code, language, filename, variant = 'default' }: PCodeBlock) => {
  const data: CodeBlockProps['data'] = [
    {
      language,
      filename,
      code,
    },
  ];

  return (
    <CodeBlockUI data={data} defaultValue={data[0].language} className='not-prose'>
      {
        variant === 'default' && (
          <CodeBlockHeader>
            <CodeBlockFiles>
              {(item) => (
                <CodeBlockFilename key={item.language} value={item.language}>
                  {item.filename}
                </CodeBlockFilename>
              )}
            </CodeBlockFiles>
            <CodeBlockSelect>
              <CodeBlockSelectTrigger>
                <CodeBlockSelectValue />
              </CodeBlockSelectTrigger>
              <CodeBlockSelectContent>
                {(item) => (
                  <CodeBlockSelectItem key={item.language} value={item.language}>
                    {item.language}
                  </CodeBlockSelectItem>
                )}
              </CodeBlockSelectContent>
            </CodeBlockSelect>
            <CodeBlockCopyButton
              onCopy={() => console.log('Copied code to clipboard')}
              onError={() => console.error('Failed to copy code to clipboard')}
            />
          </CodeBlockHeader>
        )
      }
      <CodeBlockBody>
        {(item) => (
          <CodeBlockItem key={item.language} value={item.language}>
            <CodeBlockContent language={item.language as BundledLanguage}>
              {item.code}
            </CodeBlockContent>
          </CodeBlockItem>
        )}
      </CodeBlockBody>
    </CodeBlockUI>
  );
};