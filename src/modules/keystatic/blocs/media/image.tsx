import { ImageBlock as ImageBlockComponent } from "@/components/blocs/media/image";
import { block } from "@keystatic/core/content-components";

import { fields } from '@keystatic/core'
import { ImageIcon } from 'lucide-react';

export const ImageBlock = block({
  label: 'Image',
  icon: <ImageIcon />,
  schema: {
    src: fields.image({
      label: 'Image URL',
      description: 'Enter the image URL to display',
      validation: { isRequired: true },
      directory: 'public/images',
      publicPath: '/images',
    }),
    alt: fields.text({
      label: 'Image Alt',
      description: 'Enter the image alt text',
      validation: { isRequired: true },
    })
  },

  ContentView: ({ value }) => {
    return (
      <ImageBlockComponent {...value} />
    );
  },
})