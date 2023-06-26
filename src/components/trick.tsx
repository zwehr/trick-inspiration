import { useState } from 'react';
import Tags from './tags';

type TrickProps = {
  trick: Trick;
};

type Trick = {
  _id: string;
  skater: string;
  videoTitle: string;
  youtubeLink: string;
  spotType: string;
  tags: Array<string>;
  webmLink: string;
};

export default function Trick(props: TrickProps) {
  const [trick, setTrick] = useState<Trick>(props.trick);

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

  return (
    <div className='w-1/4 m-6 border-4 border-black shadow-[10px_10px_black] bg-emerald-300'>
      <video
        muted
        loop
        onMouseOver={handleMouseOverVideo}
        onMouseOut={handleMouseOutVideo}
      >
        <source src={trick.webmLink} type='video/webm'></source>
        Your browser does not support the video tag.
      </video>
      <p>
        {trick.skater} - <a href={trick.youtubeLink}>{trick.videoTitle}</a>
      </p>
      <Tags tags={trick.tags} />
    </div>
  );
}
