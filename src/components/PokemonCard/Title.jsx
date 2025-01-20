export default function Title({ name, index, natures = [] }) {
  return (
    <div>
      <div className="pc-title">
        <div className="pc-name">
          <p className="font-bold">{name}</p>
        </div>
      </div>
      <div className="pc-nature">
        {natures.map((nature) => (
          <p
            className="font-bold"
            style={{
              fontSize: "1em",
              color: "white",
              padding: "2px",
              backgroundColor: nature.color,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            {nature.label}
          </p>
        ))}
      </div>
    </div>
  );
}
