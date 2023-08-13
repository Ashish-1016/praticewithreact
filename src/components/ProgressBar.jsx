import React, { useEffect, useState } from "react";

function ProgressBar({ percent }) {
  const time = String((Number(percent)*5000)/100)
  useEffect(()=>{

  },[percent])

  return (
    <div
      className="h-8  bg-green-500 rounded-xl"
      style={{ width: `${percent}%`,transitionDuration:`${time}ms` }}
    />
  );
}

export default ProgressBar;
