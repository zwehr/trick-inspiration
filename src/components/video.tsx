import { useState } from 'react';

type VideoProps = {
  video: Video;
};

type Video = {
  _id: string;
  skater: string;
  videoTitle: string;
  youtubeLink: string;
  spotType: string;
  tags: Array<string>;
  webmLink: string;
};

export default function Video(props: VideoProps) {
  const [video, setVideo] = useState<Video>(props.video);

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
