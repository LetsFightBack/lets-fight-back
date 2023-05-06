import "./mc.style.scss";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const Modalmc = ({ handleClose, data, style }) => {
  const rows = [
    {
      domain: "Personal Details",
      data: [
        { title: "Email", content: data?.email },
        { title: "Mobile Number", content: data?.mobileNo },
        { title: "College", content: data?.college },
      ],
    },
    {
      domain: "Previous Job",
      data: [
        { title: "Current Field of Job", content: data?.fieldOfJob },
        { title: "Previous Company", content: data?.previousCompany },
      ],
    },
    {
      domain: "About Job",
      data: [
        { title: "Achievements", content: data?.achievements },
        { title: "Years of Experience", content: data?.totalYearsOfexperience },
        { title: "Skills", content: data?.skills, style: { gridColumn: "1 / span 2" } },
        { title: "Expected CTC", content: data?.expectedCTC },
        { title: "Preferred City", content: data?.preferredCity },
        { title: "Join Info", content: data?.joinInfo },
      ],
    },
  ];
  return (
    <div className="modal-cover" onClick={handleClose} style={style}>
      <div className="Candidate-Modal" onClick={(e) => e.stopPropagation()}>
        <div className="mcontent">
          <div className="mheader">
            <div className="mhperson">
              <span>
                <PersonIcon />
              </span>
              <p>{data?.name}</p>
            </div>
            <div className="mhclose" onClick={handleClose}>
              <CloseIcon />
            </div>
          </div>
          <div className="mccontainer">
            {rows.map((item, index) => {
              return (
                <div className="mcontent__row" key={index}>
                  <div className="mctitle" style={{ gridColumn: "1 / span 2" }}>
                    {item.domain}
                  </div>
                  {item.data.map((row, index) => (
                    <Cell key={index} title={row.title} content={row.content} style={row.style} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div className="bottom-button">
          <button href={data?.resumelink} className="cancel-button" onClick={handleClose}>
            Close
          </button>
          <button className="confirm-button">
            <Link to={data?.resumelinkLink} target="_blank" rel="noreferrer">
              Resume
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;

function Cell({ title, content, style }) {
  return (
    <div className="mcontent__cell" style={style}>
      <p>{title}</p>
      <div>{content || "NA"}</div>
    </div>
  );
}
