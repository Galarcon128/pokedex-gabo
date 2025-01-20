import { useEffect, useRef } from "react";
import Radar from "./Radar";

export default function Sprite({ color = "", url = "", alt = "", stats = [] }) {
  const data = {
    labels: [
      "HP",
      "Attack",
      "Defense",
      "Special-Attack",
      "Special-Defense",
      "Speed",
    ],
    datasets: [2, 9, 3, 5, 2, 3],
  };

  return (
    <div
      id="spriteChart"
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: 1,
      }}
    >
      <img
        src={url}
        alt={alt}
        style={{
          position: "absolute",
          zIndex: 5,
          width: "20%",
          left: "calc(50% - 10%)",
          top: "calc(50% - 10%)",
          //transform: "translate(0, 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          top: 0,
          zIndex: 1,
        }}
      >
        <Radar stats={stats} color={color} />
      </div>
    </div>
  );
}
