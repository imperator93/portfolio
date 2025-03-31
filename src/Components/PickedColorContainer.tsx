import React from "react";

export const PickedColorContainer = React.memo(
  ({
    sidebar,
    paintBrush,
  }: {
    sidebar: boolean;
    paintBrush: Record<string, number>;
  }) => {
    return (
      <div
        style={
          {
            "--beginSlide": "-400px",
            "--endSlide": "400px",
          } as React.CSSProperties
        }
        className={`color-preview-container ${
          !sidebar ? "slide-from-left" : "slide-to-left"
        }`}
      >
        <div
          style={{
            width: "80%",
            height: "80%",
            background: `rgb(${paintBrush.red}, ${paintBrush.green}, ${paintBrush.blue})`,
          }}
        ></div>
      </div>
    );
  }
);
