import clientPromise from '@/lib/mongodb';
import { useState } from 'react';
import Video from '@/components/trick';

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

export default function Home(props: TrickProps) {
  const [tricks, setTricks] = useState<[Trick]>(props.tricks);
  console.log(tricks);

  return (
    <>
      <h1>Home</h1>
      {tricks.map((trick) => (
        <Video video={trick} />
      ))}
    </>
  );
}

export async function getServerSideProps() {
  try {
    let response = await fetch('http://localhost:3000/api/tricks');
    let tricks = await response.json();

    return {
      props: { tricks: JSON.parse(JSON.stringify(tricks)) },
    };
  } catch (e) {
    console.error(e);
  }
}
