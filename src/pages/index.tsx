import clientPromise from '@/lib/mongodb';
import { useState } from 'react';

type TrickProps = {
  tricks: [Trick];
};

type Trick = {
  _id: String;
  skater: String;
  videoTitle: String;
  youtubeLink: String;
  spotType: String;
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
        <div>
          <video controls>
            <source src={trick.webmLink} type='video/webm'></source>
            Your browser does not support the video tag.
          </video>
          <p>{trick.skater}</p>
          <p>{trick._id}</p>
        </div>
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
