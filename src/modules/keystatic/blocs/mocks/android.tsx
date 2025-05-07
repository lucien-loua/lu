import { fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'
import { AndroidBlock as AndroidBlockComponent } from '@/components/blocs/devices/android'
import { Smartphone } from 'lucide-react';

export const AndroidBlock = block({
  label: 'Android',
  icon: <Smartphone />,
  schema: {
    image: fields.image({
      label: 'Image Source',
      description: 'Enter the image source for the android',
      directory: 'public/images',
    }),
    videoSrc: fields.url({
      label: 'Video Source',
      description: 'Enter the video source for the android',
    })
  },
  ContentView: ({ value }) => {
    return (
      <AndroidBlockComponent {...value} />
    );
  },
})