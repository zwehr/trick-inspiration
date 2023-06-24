import { useState } from 'react';

type TrickProps = {
  video: Trick;
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

export default function Video(props: TrickProps) {
  const [video, setVideo] = useState<Trick>(props.video);

  return (
    <div>
      <video controls>
        <source src={video.webmLink} type='video/webm'></source>
        Your browser does not support the video tag.
      </video>
      <p>{video.skater}</p>
    </div>
  );
}
