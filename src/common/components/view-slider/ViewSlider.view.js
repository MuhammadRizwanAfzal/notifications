// @flow
import React from "react";

const ViewSlider = (props) => {
  const {
    formsList,
    overLays,
    activePanel,
    viewSliderProps,
    overLayProps,
    overLayInnerProps,
  } = props;
  return (
    <div
      id="container"
      className={
        activePanel === "right" ? "container right-panel-active" : "container"
      }
      {...viewSliderProps}
    >
      {formsList[0]}
      {formsList[1]}
      <div className="overlay-container" {...overLayProps}>
        <div className="overlay" {...overLayInnerProps}>
          {overLays[0]}
          {overLays[1]}
        </div>
      </div>
    </div>
  );
};

export default ViewSlider;
