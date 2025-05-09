interface VideoProps extends React.ComponentProps<"video"> { }

function Video({ ...props }: VideoProps) {
  if (!props.src) return null;
  return <video {...props} />;
}

export const VideoBlock = (props: VideoProps) => {
  return (
    <div className="size-full overflow-hidden rounded-lg object-cover border not-prose">
      <Video {...props} />
    </div>
  );
};

