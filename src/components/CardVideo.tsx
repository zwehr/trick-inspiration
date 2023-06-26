import { useRouter } from 'next/router';

type CardVideoProps = {
  webmLink: string;
  id: string;
};

export default function CardVideo({ webmLink, id }: CardVideoProps) {
  const router = useRouter();

  const handleMouseOverVideo = (
    event: React.MouseEvent<HTMLVideoElement, MouseEvent>
  ) => {
    const target = event.target as HTMLVideoElement;
    target.play();
  };

  const handleMouseOutVideo = (
    event: React.MouseEvent<HTMLVideoElement, MouseEvent>
  ) => {
    const target = event.target as HTMLVideoElement;
    target.pause();
  };

  const handleVideoClick = (id: string) => {
    router.push(`/trick/${id}`);
  };

  return (
    <video
      className='cursor-pointer'
      muted
      loop
      onMouseOver={handleMouseOverVideo}
      onMouseOut={handleMouseOutVideo}
      onClick={() => handleVideoClick(id)}
    >
      <source src={webmLink} type='video/webm'></source>
      Your browser does not support the video tag.
    </video>
  );
}
