import "./mc.style.scss";

const Modalmc = ({ handleClose, data }) => {
  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="Script-Modal" onClick={(e) => e.stopPropagation()}>
        <div className="header-wrapper-mod">
          <div className="h-img-tag">
            <img src="/Modal/Patched-Icon.svg" alt="" />
          </div>
          <div className="h-content-div">
            <p className="h-content-1">Details</p>
            <div className="data">
              <p className="data__header">Personal Details</p>
              <div>name: {data.name}</div>
              <div>email: {data.email}</div>
              <div>college: {data.college}</div>
            </div>
          </div>
        </div>
        <div className="bottom-button">
          <button className="confirm-button">Mail or Call</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
