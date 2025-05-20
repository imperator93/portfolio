import {
  Ref,
  RefObject,
  SetStateAction,
  useImperativeHandle,
  useState,
} from "react";

export type Reference = {
  setCurrentPosition: React.Dispatch<SetStateAction<number>>;
};

export const ProgressBar = ({
  handleProgressBarClicked,
  reference,
  videoPlayerRef,
  style,
}: {
  handleProgressBarClicked: (event: React.BaseSyntheticEvent) => void;
  reference: Ref<Reference>;
  videoPlayerRef: RefObject<HTMLVideoElement | null>;
  style: CSSModuleClasses;
}) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  useImperativeHandle(reference, () => {
    return { setCurrentPosition };
  });

  return (
    <>
      <p style={{ marginLeft: "10px" }}>
        {currentPosition}:00/
        {Math.floor(
          videoPlayerRef.current! ? videoPlayerRef.current!.duration : 0
        )}
        :00
      </p>
      <input
        onChange={(event) => handleProgressBarClicked(event)}
        type="range"
        value={currentPosition}
        max={videoPlayerRef.current ? videoPlayerRef.current!.duration : 0}
        className={style["progress-bar"]}
      />
    </>
  );
};
