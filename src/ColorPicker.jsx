import React, { useState } from "react";
import "./colorPicker.css";

export default function ColorPicker() {
  const [color, setColor] = useState("#fffff");

  return (
    <>
      <div className="color-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color }}>
          <p>Selected Color: {color}</p>
        </div>
        <label>Select a Color</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </>
  );
}
