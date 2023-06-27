import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import Tags from '@/components/Tags';
import Link from 'next/link';

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
  const router = useRouter();
  const [trick, setTrick] = useState<Trick>(props.trick);

  return (
    <>
      <h1 className='m-5'>
        <Link href={`/skater/${trick.skater}`}>
          <span className='p-1.5 rounded-md text-slate-100 bg-orange-600 hover:bg-orange-800'>
            {trick.skater}
          </span>
        </Link>
        &nbsp;in&nbsp;
        <Link href={`/video/${trick.videoTitle}`}>
          <span className='p-1.5 rounded-md text-slate-100 bg-cyan-600 hover:bg-cyan-800'>
            {trick.videoTitle}
          </span>
        </Link>
      </h1>
      <video controls className='mx-auto max-w-7xl'>
        <source src={trick.webmLink} type='video/webm'></source>
        Your browser does not support the video tag.
      </video>
      <div className='w-1/2 mx-auto mt-4'>
        <div className='flex justify-center'>
          <Tags tags={trick.tags} />
        </div>
        <a href={trick.youtubeLink}>
          <p className='text-center'>Watch {trick.videoTitle} on YouTube</p>
        </a>
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let id;
  if (context.params) {
    id = context.params.id;
  }
  console.log('id is ', id);

  try {
    let response = await fetch(`http://localhost:3000/api/tricks/id/${id}`);
    let trick = await response.json();

    return {
      props: { trick: JSON.parse(JSON.stringify(trick)) },
    };
  } catch (e) {
    console.error(e);
  }
}
