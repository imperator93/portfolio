import { SetStateAction } from "react";

export const Navigation = ({
  refs,
  stop,
  setStop,
}: {
  refs: Record<string, React.RefObject<HTMLElement | null>>[];
  stop: boolean;
  setStop: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <nav className="w-100 p-2 fixed-top d-flex justify-content-end gap-2 px-5 navigation">
      <button
        onClick={() => {
          setStop((prev) => !prev);
        }}
      >
        {`${stop ? "Stop" : "Start"} flickering`}
      </button>
      {refs.map((obj) =>
        Object.entries(obj).map(([key, ref]) => {
          return (
            <button
              key={key}
              onClick={() =>
                ref.current!.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="border-0"
            >
              {key}
            </button>
          );
        })
      )}
    </nav>
  );
};
