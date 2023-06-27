import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';
import TrickCard from '@/components/TrickCard';

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

export default function TricksBySkater(props: TrickProps) {
  const router = useRouter();
  let skater = router.query.name;
  const [tricks, setTricks] = useState<[Trick]>(props.tricks);

  return (
    <>
      <h1>
        {tricks.length} Tricks by {skater}
      </h1>
      <div className='flex flex-wrap'>
        {tricks.map((trick) => (
          <TrickCard trick={trick} key={trick._id} />
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let skater;
  if (context.params) {
    skater = context.params.name;
  }

  try {
    let response = await fetch(
      `http://localhost:3000/api/tricks/skater/${skater}`
    );
    let tricks = await response.json();

    return {
      props: { tricks: JSON.parse(JSON.stringify(tricks)) },
    };
  } catch (e) {
    console.error(e);
  }
}
