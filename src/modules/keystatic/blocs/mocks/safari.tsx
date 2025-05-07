import { fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'
import { SafariBlock as SafariBlockComponent } from '@/components/blocs/devices/safari'
import { Compass } from 'lucide-react';

export const SafariBlock = block({
  label: 'Safari',
  icon: <Compass />,
  schema: {
    url: fields.url({
      label: 'URL',
      description: 'Enter the URL for the safari',
    }),
    image: fields.image({
      label: 'Image',
      description: 'Enter the image for the safari',
      directory: 'public/images',
      publicPath: '/images',
    }),
    videoUrl: fields.url({
      label: 'Video',
      description: 'Enter the video for the safari',
    }),
    mode: fields.select({
      label: 'Mode',
      description: 'Enter the mode for the safari',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Simple', value: 'simple' },
      ],
      defaultValue: 'default',
    }),
  },

  ContentView: ({ value }) => {
    return (
      <SafariBlockComponent {...value} />
    );
  },
})