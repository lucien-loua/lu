import { fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'
import { CodeBlock as CodeBlockComponent } from '@/components/blocs/code'
import { ToyBrick } from 'lucide-react';

export const CodeBlock = block({
  label: 'Code Block',
  icon: <ToyBrick />,
  schema: {
    code: fields.text({
      label: 'Code',
      description: 'Enter the code to display',
      multiline: true,
      validation: { isRequired: true }
    }),
    language: fields.select({
      label: 'Language',
      options: [
        { label: 'Bash', value: 'sh' },
        { label: 'TypeScript', value: 'tsx' },
        { label: 'JavaScript', value: 'js' },
        { label: 'CSS', value: 'css' },
        { label: 'HTML', value: 'html' },
        { label: 'Ruby', value: 'rb' },
        { label: 'Python', value: 'py' },
        { label: 'Go', value: 'go' },
      ],
      defaultValue: 'tsx',
    }),
    filename: fields.text({
      label: 'Filename',
      description: 'Optional: If not provided, will use the component source code',
      defaultValue: 'index.tsx'
    }),
    variant: fields.select({
      label: 'Variant',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Compact', value: 'compact' },
      ],
      defaultValue: 'default',
    }),
  },

  ContentView: ({ value }) => {
    return (
      <CodeBlockComponent {...value} />
    );
  },
})