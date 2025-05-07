import { fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'
import { Snippet as SnippetComponent } from '@/components/blocs/snippet'

export const Snippet = block({
  label: 'Snippet',
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
      className="lucide lucide-code">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  schema: {
    commands: fields.array(
      fields.object({
        label: fields.text({
          label: 'Label',
          validation: { isRequired: true }
        }),
        code: fields.text({
          label: 'Code',
          description: 'The code to display in the snippet',
          multiline: true,
          validation: { isRequired: true }
        }),
        icon: fields.select({
          label: 'Icon',
          options: [
            { label: 'Heart', value: 'heart' },
            { label: 'Box', value: 'box' },
            { label: 'Code', value: 'code' },
            { label: 'Terminal', value: 'terminal' },
          ],
          defaultValue: 'code'
        })
      }),
      {
        label: 'Commands',
        itemLabel: props => props.fields.label.value || 'Command',
        description: 'The commands to display in the snippet',
      }
    ),
    showCopyButton: fields.checkbox({
      label: 'Show Copy Button',
      description: 'Whether to show the copy button',
      defaultValue: true,
    }),
  },
  ContentView: ({ value }) => {
    return (
      <SnippetComponent {...value} />
    );
  },
})