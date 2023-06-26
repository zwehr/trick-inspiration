import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Tags from '@/components/Tags';

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

export default function TrickCard(props: TrickProps) {
  const router = useRouter();
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
      <div className='flex flex-wrap overflow-hidden h-12 justify-center'>
        <div className='m-1.5 p-1.5 rounded-md text-slate-100 bg-orange-600 hover:bg-orange-800'>
          {trick.skater}
        </div>
        <Tags tags={trick.tags} />
      </div>
      <div className='flex justify-end text-sm'>
        <Link href={`/trick/${trick._id}`}>
          Watch with volume, view more info...
        </Link>
      </div>
    </div>
  );
}
