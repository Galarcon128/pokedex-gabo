import { useState } from "react";
import Close from "./Close";
export default function Cover(props) {
  const [isClose, setClose] = useState(false);
  return (
    <div>{isClose ? <Close setClose={setClose} /> : <>{props.children}</>}</div>
  );
}
