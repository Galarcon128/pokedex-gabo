import { useEffect, useRef, useState } from "react";

const labels = ["HP", "Attack", "Defense", "Sp-A", "Sp-D", "Speed"];

export default function Radar({
  color = "#0000FF",
  stats = [50, 80, 70, 80, 50, 100],
}) {
  const [size, setSize] = useState();
  const canva = useRef(null);

  useEffect(() => {
    if (canva !== null && !size) {
      const { offsetWidth: width } = canva.current;
      setSize(width / 2);
    }
  }, [stats]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (canva.current) {
        setSize(canva.current.offsetWidth / 2);
      }
    });

    if (canva.current) {
      resizeObserver.observe(canva.current); // Empieza a observar el div
    }

    // Cleanup cuando el componente se desmonte
    return () => {
      if (canva.current) {
        resizeObserver.unobserve(canva.current); // Deja de observar el div
      }
    };
  }, []);

  return (
    <div
      ref={canva}
      style={{
        width: "100%",
        aspectRatio: 1 / 1,
        position: "relative",
      }}
    >
      {size && <Chart size={size} stats={stats} color={color} />}
    </div>
  );
}

function Chart({ size, stats, color }) {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.45; // Radio del hexágono
  const labelRadius = radius * 0.85; // Radio para las etiquetas (ajustado un poco más adentro)

  const points = Array.from({ length: 6 }).map((_, i) => {
    const angle = (Math.PI / 3) * i; // Ángulo para cada vértice
    const x = centerX + radius * Math.cos(angle - Math.PI / 2);
    const y = centerY + radius * Math.sin(angle - Math.PI / 2);
    return { x, y };
  });

  const labelPoints = Array.from({ length: 6 }).map((_, i) => {
    const angle = (Math.PI / 3) * i; // Ángulo para cada etiqueta
    const x = centerX + labelRadius * Math.cos(angle - Math.PI / 2);
    const y = centerY + labelRadius * Math.sin(angle - Math.PI / 2);
    return { x, y };
  });

  const statsPoints = stats.map((stat, i) => {
    const angle = (Math.PI / 3) * i; // Ángulo para cada etiqueta
    const statsRadius = radius * (stat.base_stat / 100);
    const x = centerX + statsRadius * Math.cos(angle - Math.PI / 2);
    const y = centerY + statsRadius * Math.sin(angle - Math.PI / 2);
    return { x, y };
  });

  return (
    <svg width={size * 2} height={size * 2} viewBox={`0 0 ${size} ${size}`}>
      {statsPoints.map((stat, i) => {
        const { x, y } = stat;
        return <circle r="1" cx={x} cy={y} fill={"#000000"} />;
      })}
      <polygon
        points={statsPoints
          .map((stat) => {
            const { x, y } = stat;
            return `${x},${y}`;
          })
          .join(" ")}
        style={{ fill: "rgba(0,0,0,0.5)", stroke: color, strokeWidth: 1 }}
      />
      {/* Hexágono principal */}
      <polygon
        points={points.map((p) => `${p.x},${p.y}`).join(" ")}
        fill="none"
        stroke="black"
        strokeWidth="0.5"
      />
      {/* Etiquetas */}
      {labels.map((label, i) => {
        const { x, y } = labelPoints[i];
        return (
          <text
            key={label}
            x={x}
            y={y}
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="8"
            fill="black"
            fontWeight="bold"
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}
