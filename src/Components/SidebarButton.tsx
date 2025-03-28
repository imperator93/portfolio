import { SetStateAction } from "react";

export const SidebarButton = ({
  sidebar,
  setSidebar,
}: {
  sidebar: boolean;
  setSidebar: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      style={
        {
          "--beginSlide": "0px",
          "--endSlide": "400px",
        } as React.CSSProperties
      }
      onClick={() => setSidebar((prev) => !prev)}
      className={`sidebar-toggle ${!sidebar && `slide-from-left`}`}
    >
      {sidebar ? "Draw" : "Close"}
    </button>
  );
};
