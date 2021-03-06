import React, { useState } from "react";

const Circle = () => {
  const randomColor = () => {
    const color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    return color;
  };

  const [color, setColor] = useState(randomColor());
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 55"
      fill={color}
      onMouseEnter={() => setColor(randomColor())}
      style={{ margin: "0.2rem" }}
      id="oneCircle"
    >
      <path d="M35.791,53.607c8.639,1.139,14.7-3.216,20.66-8.021,2.17-1.747,5.162-4.373,5.154-6.588-.047-7.236,2.452-14.135-.709-21.947C57.436,8.495,52.21,3.845,44.044,1.684,40.86.837,37.231,1.755,33.9,1.263,23.8-.23,16.3,4.887,8.861,10.218-1,18.617,1.477,29.854,2.688,40.129c.446,3.752,5.388,7.3,8.851,10.281a15.008,15.008,0,0,0,8.143,3.521C25.017,54.318,30.534,52.921,35.791,53.607Z"></path>
      <path
        d="M35.794,53.607c8.639,1.139,14.7-3.216,20.66-8.021,2.17-1.747,5.162-4.373,5.154-6.588-.047-7.236,2.452-14.135-.709-21.947C57.439,8.495,52.213,3.845,44.048,1.684c-3.185-.847-6.814.071-10.146-.421C23.806-.23,16.3,4.887,8.864,10.218c-9.858,8.4-7.384,19.636-6.173,29.911.446,3.752,5.388,7.3,8.851,10.281a15.008,15.008,0,0,0,8.143,3.521c5.335.387,10.852-1.01,16.109-.324"
        fill="none"
        style={{ stroke: "#dcff00" }}
      ></path>
    </svg>
  );
};

export default Circle;
