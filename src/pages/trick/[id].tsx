import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';

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
      <h1>Trick ID: {router.query.id}</h1>
      <video controls className='mx-auto'>
        <source src={trick.webmLink} type='video/webm'></source>
        Your browser does not support the video tag.
      </video>
      <div className='w-1/3 mx-auto text-left'>
        <p>Skater: {trick.skater}</p>
        <p>Tags: {trick.tags}</p>
        <p>Spot Type: {trick.spotType}</p>
        <p>
          Video: {trick.videoTitle} (View more clips here | View entire video on
          YouTube)
        </p>
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
