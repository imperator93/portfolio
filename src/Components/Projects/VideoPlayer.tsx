import React, { useEffect, useRef, useState } from "react";

import { v4 } from "uuid";

import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { CiStop1 } from "react-icons/ci";
import { BsRewind } from "react-icons/bs";
import { LiaForwardSolid } from "react-icons/lia";
import { CiImport } from "react-icons/ci";

import style from "./VideoPlayer.module.css";

export const VideoPlayer = React.memo(() => {
  const [videoControls, setVideoControls] = useState({
    isPlaying: false,
    currentPosition: 0,
    isHovered: false,
  });

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

  //tracking for progress bar
  useEffect(() => {
    videoPlayerRef.current!.addEventListener("timeupdate", () => {
      setVideoControls((prev) => ({
        ...prev,
        currentPosition: Math.floor(videoPlayerRef.current!.currentTime),
      }));
    });
  }, []);

  //keeps the same state of the video ref when rewind/forwards event occurs
  useEffect(() => {
    if (videoPlayerRef.current!.paused)
      setVideoControls((prev) => ({ ...prev, isPlaying: false }));
  }, []);

  //buttons config
  const handleVideoControls = (event: React.BaseSyntheticEvent) => {
    const player = videoPlayerRef.current;
    switch (event.target.id) {
      case "rewind":
        player!.currentTime -= 2;
        if (videoControls.isPlaying) player?.play();
        break;
      case "pause":
        setVideoControls((prev) => ({ ...prev, isPlaying: false }));
        player?.pause();
        break;
      case "play":
        setVideoControls((prev) => ({ ...prev, isPlaying: true }));
        player?.play();
        break;
      case "forwards":
        player!.currentTime += 2;
        if (videoControls.isPlaying) player?.play();
        break;
      case "stop":
        player!.currentTime = 0;
        player!.pause();
        setVideoControls((prev) => ({ ...prev, isPlaying: false }));
        break;
    }
  };

  const handleProgressBarClicked = (event: React.BaseSyntheticEvent) => {
    videoPlayerRef.current!.currentTime = event.target.value;
    setVideoControls((prev) => ({
      ...prev,
      currentPosition: event.target.value,
    }));
  };

  return (
    <div className={style["video-player-container"]}>
      <div
        onMouseEnter={() => {}}
        style={{ position: "absolute" }}
        className={style["video-player-wrapper"]}
      >
        <video
          ref={videoPlayerRef}
          className={style["video-player"]}
          src="https://www.w3schools.com/html/mov_bbb.webm"
        ></video>
        <div
          onMouseEnter={() =>
            setVideoControls((prev) => ({ ...prev, isHovered: true }))
          }
          onMouseLeave={() =>
            setVideoControls((prev) => ({ ...prev, isHovered: false }))
          }
          className={`${style["controls-wrapper"]} ${
            style[
              videoControls.isHovered ? "fade-in control-wrapper" : "fade-out"
            ]
          }`}
        >
          <h1 className={style["video-title"]}>test</h1>
          <div>
            <p style={{ marginLeft: "10px" }}>
              {videoControls.currentPosition}:00/
              {Math.floor(
                videoPlayerRef.current! ? videoPlayerRef.current!.duration : 0
              )}
              :00
            </p>
            <input
              onChange={(event) => handleProgressBarClicked(event)}
              type="range"
              value={videoControls.currentPosition}
              max={
                videoPlayerRef.current ? videoPlayerRef.current!.duration : 0
              }
              className={style["progress-bar"]}
            />
            <ul className={style["controls-bar"]}>
              {controlsTable.map((c) => (
                <button
                  key={v4()}
                  id={c.props.id}
                  onClick={(event) => handleVideoControls(event)}
                  className={style["buttons"]}
                >
                  {c}
                </button>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});
