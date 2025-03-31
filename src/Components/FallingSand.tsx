import React, { useEffect, useState } from "react";
import { PickedColorContainer } from "./PickedColorContainer";

export const FallingSand = React.memo(({ sidebar }: { sidebar: boolean }) => {
  const ROWS = 1008;

  const [mousePressed, setMousePressed] = useState(false);
  const [paintBrush, setPaintBrush] = useState<Record<string, number>>({
    red: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255),
  });

  const [template, setTemplate] = useState(() => {
    const temp = new Array(ROWS);

    for (let i = 0; i < ROWS; i++) {
      temp[i] = { filled: false, red: 0, green: 0, blue: 0 };
    }
    return temp;
  });

  const handleMouseOver = (event: React.BaseSyntheticEvent) => {
    if (mousePressed) {
      template[event.target.id] = {
        filled: true,
        red: paintBrush.red,
        green: paintBrush.green,
        blue: paintBrush.blue,
      };
      setTemplate([...template]);
    }
  };

  const handleColorSliderOnChange = (event: React.BaseSyntheticEvent) => {
    Object.keys(paintBrush).forEach((col) => {
      if (col == event.target.id) {
        setPaintBrush((prev) => ({ ...prev, [col]: event.target.value }));
      }
    });
  };

  return (
    <div
      onMouseLeave={() => setMousePressed(false)}
      onMouseDown={() => setMousePressed(true)}
      onMouseUp={() => setMousePressed(false)}
      style={
        { "--beginSlide": "-400px", "--endSlide": "0px" } as React.CSSProperties
      }
      className={`d-flex flex-wrap gap-1 falling-sand-container ${
        !sidebar && `slide-from-left`
      }`}
    >
      {template.map((row, rowIdx) => (
        <div
          onMouseMove={(event) => handleMouseOver(event)}
          key={Math.random()}
          id={`${rowIdx}`}
          style={{
            width: "10px",
            height: "10px",
            color: "transparent",
            background:
              row.filled != true
                ? "white"
                : `rgb(${row.red},${row.green},${row.blue})`,
            userSelect: "none",
          }}
        ></div>
      ))}

      <PickedColorContainer sidebar={sidebar} paintBrush={paintBrush} />

      <div className="row px-2 py-1 justify-content-center">
        {["red", "green", "blue"].map((color: string) => {
          return (
            <div className="row" key={color}>
              <label style={{ userSelect: "none" }}>{color}</label>
              <input
                onChange={(event) => handleColorSliderOnChange(event)}
                type="range"
                id={color}
                min={0}
                max={255}
                step={1}
                value={paintBrush[color]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
});
