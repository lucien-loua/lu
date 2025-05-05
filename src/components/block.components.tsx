import { fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'
import { Codesandbox } from 'lucide-react'
import { SandBox as SandBoxComponent } from './sandbox'

export const SandBox = block({
  label: 'SandBox',
  icon: <Codesandbox />,
  description: 'Sandbox for testing components',
  schema: {
    showcase: fields.relationship({
      label: 'Showcase Component',
      description: 'Select a component to display',
      collection: 'showcase',
      validation: { isRequired: true }
    }),
    type: fields.select({
      label: 'Type',
      options: [
        { label: 'Component', value: 'component' },
        { label: 'Block', value: 'block' },
      ],
      defaultValue: 'block',
    }),
    code: fields.text({
      label: 'Code',
      description: 'Optional: If not provided, will use the component source code'
    }),
  },
  ContentView: ({ value }) => {
    return (
      <SandBoxComponent
        path={value.showcase}
        type={value.type}
        code={value.code}
      />
    );
  },
})