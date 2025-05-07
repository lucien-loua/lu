import { fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'
import { SandBox as SandBoxComponent } from '@/components/blocs/sandbox'
import { Cuboid } from 'lucide-react';

export const SandBox = block({
  label: 'SandBox',
  icon: <Cuboid />,
  schema: {
    showcase: fields.text({
      label: 'Showcase Component',
      description: 'Enter the name of the component to display (without .tsx extension)',
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
      <SandBoxComponent {...value} />
    );
  },
})