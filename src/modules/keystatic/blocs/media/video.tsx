import { VideoBlock as VideoBlockComponent } from "@/components/blocs/media/video";
import { block } from "@keystatic/core/content-components";

import { fields } from '@keystatic/core'
import { Video } from 'lucide-react';

export const VideoBlock = block({
  label: 'Video',
  icon: <Video />,
  schema: {
    src: fields.text({
      label: 'Video URL',
      description: 'Enter the video URL to display',
      validation: { isRequired: true },
    }),
    autoPlay: fields.checkbox({
      label: 'Auto Play',
      defaultValue: false,
    }),
    loop: fields.checkbox({
      label: 'Loop',
      defaultValue: false,
    }),
    muted: fields.checkbox({
      label: 'Muted',
      defaultValue: false,
    }),
    playsInline: fields.checkbox({
      label: 'Plays Inline',
      defaultValue: false,
    }),
  },

  ContentView: ({ value }) => {
    return (
      <VideoBlockComponent {...value} />
    );
  },
})