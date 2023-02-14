import { useState } from "react";
import Modalmc from "./Inactive-Script-Modal/mc.component";

export default function InactiveScriptModal({ className, data, children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={className} onClick={handleShow}>
        {children}
      </div>
      {show ? <Modalmc handleClose={handleClose} data={data} /> : null}
    </>
  );
}
