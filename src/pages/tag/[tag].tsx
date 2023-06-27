import { useRouter } from 'next/router';
import { useState } from 'react';
import TrickCard from '@/components/TrickCard';
import { GetServerSidePropsContext } from 'next';

type TrickProps = {
  tricks: [Trick];
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

export default function Tag(props: TrickProps) {
  const router = useRouter();
  const [tricks, setTricks] = useState<[Trick]>(props.tricks);

  return (
    <>
      <h1>Tag: {router.query.tag}</h1>
      <div className='flex flex-wrap'>
        {tricks.map((trick) => (
          <TrickCard trick={trick} key={trick._id} />
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let tag;
  if (context.params) {
    tag = context.params.tag;
  }

  try {
    let response = await fetch(
      `https://trick-inspiration.vercel.app/api/tricks/tag/${tag}`
    );
    let tricks = await response.json();

    return {
      props: { tricks: JSON.parse(JSON.stringify(tricks)) },
    };
  } catch (e) {
    console.error(e);
  }
}
