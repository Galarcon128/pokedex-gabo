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
      }}
    >
      <div>
        <img
          src={url}
          alt={alt}
          style={{
            position: "absolute",
            width: "40%",
            height: "auto",
            zIndex: 5,
            top: "50%",
            left: "30%",
            transform: "translate(0, 50%)",
          }}
        />
      </div>
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
