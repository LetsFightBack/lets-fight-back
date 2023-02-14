import "./application.style.scss";
import InactiveScriptModal from "./modal/modal.component";

const Application = ({ data }) => {
  const { teamlink } = data;
  return (
    <InactiveScriptModal className="application" data={data}>
      <h2>{data.name}</h2>
      <p>
        <a href={teamlink}>{data.email}</a>
      </p>
      <p>
        <i className="fa-solid fa-school"></i>
        {"  "}
        {data.college}
      </p>
      <p className="bl-r">{data.previousCompany}</p>
      <p className="p-right">
        <a href={data.resumeLink} target="_blank" rel="noreferrer">
          <i className="fa-solid fa-file"></i>
        </a>
      </p>
    </InactiveScriptModal>
  );
};

export default Application;
