import { useState, useRef } from "react";
import "./SliderUnlock.css";

export default function SliderUnlock({ onUnlock = () => {} }) {
  const [dragPosition, setDragPosition] = useState(0);
  const sliderRef = useRef(null);

  const handleMove = (clientX) => {
    if (sliderRef.current != null) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const newPos = Math.min(
        Math.max(0, clientX - sliderRef.current.offsetLeft),
        sliderWidth - 50
      );
      setDragPosition(newPos);

      if (newPos >= sliderWidth - 50) {
        onUnlock();
      }
    }
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleEnd = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleEnd);
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleEnd);
  };

  const handleStart = (e) => {
    if (e.type === "mousedown") {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleEnd);
    } else if (e.type === "touchstart") {
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleEnd);
    }
  };

  return (
    <div className="slider-container" ref={sliderRef}>
      <div className="slider-track" />
      <div
        className="slider-thumb"
        style={{
          transform: `translateX(${dragPosition}px) rotate(${
            dragPosition * 2
          }deg)`,
        }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        <div className="slider-buttom"></div>
      </div>
      <div className="slider-label">Desliza para iniciar</div>
    </div>
  );
}
