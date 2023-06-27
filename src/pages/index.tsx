import TrickCard from '@/components/TrickCard';
import { useState } from 'react';

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

  return (
    <>
      <h1>Tasteful Tech</h1>
      <div className='flex flex-wrap'>
        {tricks.map((trick) => (
          <TrickCard trick={trick} key={trick._id} />
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    let response = await fetch(
      'https://trick-inspiration.vercel.app/api/tricks'
    );
    let tricks = await response.json();

    return {
      props: { tricks: JSON.parse(JSON.stringify(tricks)) },
    };
  } catch (e) {
    console.error(e);
  }
}
