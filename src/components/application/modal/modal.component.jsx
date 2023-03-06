import { useState } from "react";
import Modalmc from "./mc/mc.component";

export default function CandidateModal({ className, data, children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={className} onClick={handleShow}>
        {children}
      </div>
      <Modalmc
        handleClose={handleClose}
        data={data}
        key="123"
        style={!show ? { display: "none" } : { display: "flex" }}
      />
    </>
  );
}
