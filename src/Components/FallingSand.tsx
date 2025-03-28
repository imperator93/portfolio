import React, { useState } from "react";

export const FallingSand = React.memo(() => {
  const ROWS = 1008;

  const [mousePressed, setMousePressed] = useState(false);
  const [paintBrush, setPaintBrush] = useState<Record<string, number>>({
    red: 0,
    green: 0,
    blue: 0,
  });

  const [template, setTemplate] = useState(() => {
    const temp = new Array(ROWS);

    for (let i = 0; i < ROWS; i++) {
      temp[i] = { filled: false, red: 0, green: 0, blue: 0 };
    }
    return temp;
  });

  // (() => {
  //   const i = setInterval(() => {}, 1000);
  //   clearInterval(i);
  // })();

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
        {
          "--delay": "4500ms",
          opacity: "0",
          width: "420px",
        } as React.CSSProperties
      }
      className="d-flex flex-wrap gap-1 falling-sand-container intro-animation"
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
      <div className="row">
        {["red", "green", "blue"].map((color: string) => {
          return (
            <div className="row" key={color}>
              <label>{color}</label>
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
