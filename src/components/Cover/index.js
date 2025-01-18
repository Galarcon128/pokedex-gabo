import { useState } from "react";
import Close from "./Close";
export default function Cover(props) {
  const [isClose, setClose] = useState(true);
  return (
    <div>{isClose ? <Close setClose={setClose} /> : <>{props.children}</>}</div>
  );
}
