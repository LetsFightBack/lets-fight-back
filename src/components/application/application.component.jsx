import "./application.style.scss";
import CandidateModal from "./modal/modal.component";
import { FcGraduationCap,FcFile } from "react-icons/fc";

const Application = ({ data }) => {
  return (
    <CandidateModal className="application" data={data}>
      <h2>{data?.name}</h2>
      <p className="application__email">
        <a href=" ">{data?.email}</a>
      </p>
      <p>
       <FcGraduationCap/>
        {"  "}
        {data?.college}
      </p>
      <p className="bl-r">{data?.previousCompany}</p>
      <p className="p-right">
        <a href={data?.resumeLink} target="_blank" rel="noreferrer">
         <FcFile/>
        </a>
      </p>
    </CandidateModal>
  );
};

export default Application;
