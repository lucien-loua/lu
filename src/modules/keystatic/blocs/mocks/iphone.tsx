import { fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'
import { IphoneBlock as IphoneBlockComponent } from '@/components/blocs/devices/iphone'
import { Smartphone } from 'lucide-react';

export const IphoneBlock = block({
  label: 'Iphone',
  icon: <Smartphone />,
  schema: {
    image: fields.image({
      label: 'Image',
      description: 'Enter the image for the iphone',
      directory: 'public/images',
      publicPath: '/images',
    }),
    videoSrc: fields.url({
      label: 'Video Source',
      description: 'Enter the video source for the iphone',
    }),
  },

  ContentView: ({ value }) => {
    return (
      <div className='not-prose flex justify-center border rounded-lg p-4'>
        <IphoneBlockComponent {...value} />
      </div>
    );
  },
})