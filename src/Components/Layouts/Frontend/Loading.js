import React from "react";
import "./Loading.css";
function Loading() {
  return (
    <div >
      <div className="lwrapper">
        <div className="lcircle" />
        <div className="lcircle" />
        <div className="lcircle" />
        <div className="lshadow" />
        <div className="lshadow" />
        <div className="lshadow" />
        <span>Loading</span>
      </div>
    </div>
  );
}

export default Loading;
