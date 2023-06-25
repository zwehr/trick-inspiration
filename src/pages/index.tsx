import clientPromise from '@/lib/mongodb';
import { useState } from 'react';
import Trick from '@/components/trick';

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
      <h1>Tasteful Tech</h1>
      <div className='flex flex-wrap'>
        {tricks.map((trick) => (
          <Trick trick={trick} />
        ))}
      </div>
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
