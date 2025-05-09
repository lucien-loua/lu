import { fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'
import { Snippet as SnippetComponent } from '@/components/blocs/snippet'
import { Code } from 'lucide-react';

export const Snippet = block({
  label: 'Snippet',
  icon: <Code />,
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
            { label: 'Npm', value: 'npm' },
            { label: 'Pnpm', value: 'pnpm' },
            { label: 'Yarn', value: 'yarn' },
            { label: 'Bun', value: 'bun' },
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