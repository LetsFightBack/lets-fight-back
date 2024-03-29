import React, { useState } from "react";
import JobTable from "../../components/jobpost_component/JobTable";
import AuthPopup from "../../components/authPopup/authPopup";
import Appbar from "../../components/Navbar/Navbar";
import WAPopup from "../../components/home_page_components/WAPopup";

const JobPosting = () => {
  const [openAuthPopup, setOpenAuthPopup] = useState(true);
  const [filterInput, setFilterInput] = useState("");
  const [filterColumn, setFilterColumn] = useState("");
  return (
    <>
      <WAPopup />
      <AuthPopup open={openAuthPopup} setOpen={setOpenAuthPopup} />
      {/* <Appbar/> */}
      <h3
        style={{
          textAlign: "center",
          margin: "2rem 0",
          fontSize: "2rem",
          fontWeight: "700",
          color: " #162141",
        }}
      >
        Job Posting
      </h3>
      <div
        style={{
          maxWidth: "100%",
          // margin: "3rem 2rem",
          minHeight: "80vh",
          borderRadius: "",
          borderRadius: "1rem",
          background: "#FFFFFF",
          boxShadow: "rgba(118, 118, 118, 0.25) 5px -3px 17px 12px",
        }}
        className="container-sm"
      >
        <div className="row justify-content-center">
          <div className="col-sm-11 ">
            <JobTable
              filterColumn={filterColumn}
              setFilterColumn={setFilterColumn}
              filterInput={filterInput}
              setFilterInput={setFilterInput}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPosting;
