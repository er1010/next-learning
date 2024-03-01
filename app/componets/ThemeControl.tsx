import React from "react";

const ThemeControl = () => {
  return (
    <div>
      <label className="flex cursor-pointer gap-2">
        <span className="label-text">Current</span>
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />
        <span className="label-text">Synthwave</span>
      </label>
    </div>
  );
};

export default ThemeControl;
