import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Video } from 'remotion';
import { Player } from '@remotion/player';

const videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <p>Reference / native video element</p>
    <video
      width={640}
      height={360}
      src={videoUrl}
      controls
    />

    <p>Remotion Video component</p>
    <Player
      compositionWidth={640}
      compositionHeight={360}
      fps={30}
      durationInFrames={596*30}
      controls
      component={() => (
        <Video
          width={640}
          height={360}
          src={videoUrl}
        />
      )}
    />
  </React.StrictMode>
);
