import React, { useRef, useState } from "react";
import style from "./VideoPlayer.module.css";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { CiStop1 } from "react-icons/ci";
import { BsRewind } from "react-icons/bs";
import { LiaForwardSolid } from "react-icons/lia";
import { CiImport } from "react-icons/ci";

export const VideoPlayer = React.memo(() => {
  const [videoControls, setVideoControls] = useState({ isPlaying: true });

  const controlsTable = [
    <CiImport className={style["control-button"]} id="import" />,
    <BsRewind className={style["control-button"]} id="rewind" />,
    !videoControls.isPlaying ? (
      <CiPlay1 className={style["control-button"]} id="play" />
    ) : (
      <CiPause1 className={style["control-button"]} id="pause" />
    ),
    <LiaForwardSolid className={style["control-button"]} id="forwards" />,
    <CiStop1 className={style["control-button"]} id="stop" />,
  ];

  const videoPlayerRef = useRef<HTMLVideoElement>(null);
  const handleVideoControls = (event: React.BaseSyntheticEvent) => {
    console.log(event.target.id);
  };
  return (
    <div className={style["video-player-container"]}>
      <div className={style["video-player-wrapper"]}>
        <h1>test</h1>
        <video
          ref={videoPlayerRef}
          className={style["video-player"]}
          controls
          src="https://www.w3schools.com/html/mov_bbb.webm"
        ></video>
        <ul className={style["controls-bar"]}>
          {controlsTable.map((c) => (
            <button
              key={Math.random()}
              onClick={(event) => handleVideoControls(event)}
              className={style["buttons"]}
            >
              {c}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
});
