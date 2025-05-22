import React, { useEffect, useRef, useState } from "react";

import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { CiStop1 } from "react-icons/ci";
import { BsRewind } from "react-icons/bs";
import { LiaForwardSolid } from "react-icons/lia";
import { CiImport } from "react-icons/ci";

import style from "./VideoPlayer.module.css";
import { ProgressBar, Reference } from "./ProgressBar";

export const VideoPlayer = React.memo(() => {
  const [videoControls, setVideoControls] = useState({
    isPlaying: false,
    isHovered: false,
    defaultVideo: "https://www.w3schools.com/html/mov_bbb.webm",
    defaultVideoName: "https://www.w3schools.com/html/mov_bbb.webm",
  });

  //look at this ugly thing haha
  const reference = useRef<Reference>(null);

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

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setVideoControls((prev) => ({
        ...prev,
        defaultVideo: URL.createObjectURL(file),
        defaultVideoName: file.name,
        isPlaying: false,
      }));
    }
  };

  //tracking for progress bar
  useEffect(() => {
    videoPlayerRef.current!.addEventListener("timeupdate", () => {
      reference.current?.setCurrentPosition(
        videoPlayerRef.current ? videoPlayerRef.current!.currentTime : 0
      );
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
        player?.pause();
        setVideoControls((prev) => ({ ...prev, isPlaying: false }));
        break;
      case "play":
        player?.play();
        setVideoControls((prev) => ({ ...prev, isPlaying: true }));
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
      <h1
        style={{
          alignSelf: "flex-start",
        }}
      >
        Video player
      </h1>
      <div
        onMouseEnter={() => {}}
        style={{ position: "absolute" }}
        className={style["video-player-wrapper"]}
      >
        <button
          id={videoControls.isPlaying ? "pause" : "play"}
          onClick={(event) => handleVideoControls(event)}
          className={style["big-play-button"]}
        />
        <video
          ref={videoPlayerRef}
          className={style["video-player"]}
          src={videoControls.defaultVideo}
        ></video>
        <div
          onMouseEnter={() =>
            setVideoControls((prev) => ({ ...prev, isHovered: true }))
          }
          onMouseLeave={() =>
            setVideoControls((prev) => ({ ...prev, isHovered: false }))
          }
          className={style["controls-wrapper"]}
        >
          <h1 className={style["video-title"]}>
            {videoControls.defaultVideoName}
          </h1>
          <div>
            <ProgressBar
              reference={reference}
              handleProgressBarClicked={handleProgressBarClicked}
              style={style}
              videoPlayerRef={videoPlayerRef}
            />
            <ul className={style["controls-bar"]}>
              {controlsTable.map((c) => {
                if (c.props.id == "import")
                  return (
                    <label
                      key={c.props.id}
                      style={{
                        width: "100%",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      {c}
                      <input
                        onChange={(event) => handleVideoUpload(event)}
                        className={style["import"]}
                        type="file"
                        accept="video/*"
                      />
                    </label>
                  );
                return (
                  <button
                    key={c.props.id}
                    id={c.props.id}
                    onClick={(event) => handleVideoControls(event)}
                    className={style["buttons"]}
                  >
                    {c}
                  </button>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});
