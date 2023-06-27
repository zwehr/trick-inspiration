import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Tags from '@/components/Tags';
import CardVideo from './CardVideo';

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

  return (
    <div className='w-1/4 m-6 border-4 border-black shadow-[10px_10px_black] bg-emerald-300'>
      <CardVideo webmLink={trick.webmLink} id={trick._id} />

      <div className='flex flex-wrap overflow-hidden h-12 justify-center'>
        <Link href={`/skater/${trick.skater}`}>
          <div className='m-1.5 p-1.5 rounded-md text-slate-100 bg-orange-600 hover:bg-orange-800'>
            {trick.skater}
          </div>
        </Link>
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
