import { fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'
import { CodeBlock as CodeBlockComponent } from '@/components/blocs/code'

export const CodeBlock = block({
  label: 'Code Block',
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-codesandbox-icon lucide-codesandbox">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
      <polyline points="7.5 19.79 7.5 14.6 3 12" />
      <polyline points="21 12 16.5 14.6 16.5 19.79" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" x2="12" y1="22.08" y2="12" />
    </svg>
  ),
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
  NodeView: ({ value }) => {
    return (
      <CodeBlockComponent {...value} />
    );
  },
  ContentView: ({ value }) => {
    return (
      <CodeBlockComponent {...value} />
    );
  },
})