export default function Sprite({ url = "", alt = "" }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src={url}
        alt={alt}
        style={{
          width: "90%",
          height: "auto",
        }}
      />
    </div>
  );
}
