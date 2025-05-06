"use client"
import {
  Snippet as SnippetComponent,
  SnippetHeader,
  SnippetCopyButton,
  SnippetTabsList,
  SnippetTabsTrigger,
  SnippetTabsContent
} from '@/components/ui/snippet'
import { BoxIcon, CodeIcon, HeartIcon, TerminalIcon } from 'lucide-react';
import { useState } from 'react';

type Command = {
  label: string;
  code: string;
  icon: string;
};

type SnippetProps = {
  commands: readonly Command[];
  showCopyButton?: boolean;
};

const iconMap = {
  heart: HeartIcon,
  box: BoxIcon,
  code: CodeIcon,
  terminal: TerminalIcon,
};

export const Snippet = ({ commands, showCopyButton = true }: SnippetProps) => {
  const [value, setValue] = useState(commands[0]?.label);
  const activeCommand = commands.find((command) => command.label === value);

  return (
    <SnippetComponent className='overflow-y-auto' value={value} onValueChange={setValue}>
      <SnippetHeader>
        <SnippetTabsList>
          {commands.map((command) => {
            const Icon = iconMap[command.icon as keyof typeof iconMap];
            return (
              <SnippetTabsTrigger key={command.label} value={command.label}>
                <Icon size={14} />
                <span>{command.label}</span>
              </SnippetTabsTrigger>
            );
          })}
        </SnippetTabsList>
        {showCopyButton && activeCommand && (
          <SnippetCopyButton value={activeCommand.code} />
        )}
      </SnippetHeader>
      {commands.map((command) => (
        <SnippetTabsContent key={command.label} value={command.label}>
          {command.code}
        </SnippetTabsContent>
      ))}
    </SnippetComponent>
  );
}
