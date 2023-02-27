import "./mc.style.scss";

const Modalmc = ({ handleClose, data }) => {
  const rows = [
    { title: "Name", content: data?.name },
    { title: "Email", content: data?.email },
    { title: "Mobile Number", content: data?.mobileNo },
    { title: "Current Field of Job", content: data?.fieldOfJob },
    { title: "Previous Company", content: data?.previousCompany },
    { title: "College", content: data?.college },
    { title: "Skills", content: data?.skills },
    { title: "Achievements", content: data?.achievements },
    { title: "Years of Experience", content: data?.totalYearsOfexperience },
    { title: "Expected CTC", content: data?.expectedCTC },
    { title: "Preferred City", content: data?.preferredCity },
    { title: "Join Info", content: data?.joinInfo },
  ];
  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="Candidate-Modal" onClick={(e) => e.stopPropagation()}>
        <div className="mcontent">
          <p className="h-content-1">Details</p>
          <div className="mcontent__row">
            {rows.map((row, index) => (
              <Cell key={index} title={row.title} content={row.content} />
            ))}
          </div>
        </div>
        <div className="bottom-button">
          <button className="cancel-button">Mail</button>
          <button className="confirm-button">Call</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;

function Cell({ title, content }) {
  return (
    <div className="mcontent__cell">
      <p>{title}</p>
      <div>{content || "NA"}</div>
    </div>
  );
}
