import "./view.style.scss";
import { useState, useEffect } from "react";
import Application from "../../components/application/application.component";
import Select from "react-select";
import {
  analytics,
  getAllCandidates,
  getHRDetail,
  getLoginDetails,
} from "../../utils/firebase/firebase.utils";
import { Box, CircularProgress } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Navigate } from "react-router-dom";
import { AES, enc } from "crypto-js";
import { IsEmailVerified } from "../NotVerified/NotVerified.page";
import PageNotVerified from "../NotVerified/NotVerified.page";
import { useNavigate } from "react-router";
import { logEvent } from "firebase/analytics";
const SECRET_KEY = "wq893258yt35gh8989";
const DURATION = 1000 * 60 * 60 * 24;

export default function View() {
  // const [dropdownstate, SetDropdownstate] = useState([false]);
  const navigate = useNavigate();
  const [isVisible, SetIsvisible] = useState(false);
  const [searchField, SetSearchField] = useState("");
  const [applicationData, SetApplicationData] = useState([]);
  const [filteredData, SetFilteredData] = useState([]);
  const [filterRadios, SetFilterRadios] = useState(new Array(8).fill(false));
  const [filterJob, SetFilterJob] = useState(null);
  const [filterConditions, SetFilterConditions] = useState({});

  useEffect(() => {
    IsEmailVerified().then((res) => {
      if (res === false) {
        navigate("/verifymail", { replace: true });
        // return (<PageNotVerified></PageNotVerified>)
      }
    });
    getAllCandidates().then((data) => {
      SetApplicationData(data);
    });
    function getAndSetData() {
      getAllCandidates().then((data) => {
        SetApplicationData(data);
        localStorage.setItem(
          "candidates",
          JSON.stringify({
            date: new Date(),
            data: AES.encrypt(JSON.stringify(data), SECRET_KEY).toString(),
          })
        );
      });
    }
    let local = localStorage.getItem("candidates");
    local = JSON.parse(local);
    if (!local || new Date().getTime() - new Date(local.date).getTime() >= DURATION) {
      getAndSetData();
    } else {
      if (!local.data) {
        getAndSetData();
      } else {
        let data = AES.decrypt(local.data, SECRET_KEY);
        data = JSON.parse(data.toString(enc.Utf8));
        SetApplicationData(data);
      }
    }
  }, []);

  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    getHRDetail().then((event) => {
      try {
        if (event.verificationStatus !== "Verified") {
          setAllowed(true);
        }
      } catch {}
    });
  }, []);

  useEffect(() => {
    console.log(filterJob);
  }, [filterJob]);

  useEffect(() => {
    const statusNo = () => {
      const n = filterRadios.findIndex((el) => el === true);
      switch (n) {
        case 0:
          return "0-1";
        case 1:
          return "1-2";
        case 2:
          return "2-3";
        case 3:
          return "3-5";
        case 4:
          return "5 - 7";
        case 5:
          return "7 - 10";
        case 6:
          return "10 - 15";
        case 7:
          return "15+";
        default:
          return "";
      }
    };
    let exp = statusNo();
    SetFilteredData(
      applicationData.filter((candidate) => {
        try {
          let ctcCond = false;
          try {
            var expectedCTC = candidate?.expectedCTC?.toLocaleLowerCase();
          } catch {
            expectedCTC = "";
          }
          if (!filterConditions.expectedCTC) {
            ctcCond = true;
          } else {
            if (
              expectedCTC.includes("lpa") ||
              expectedCTC.includes("l") ||
              expectedCTC.includes("lakhs") ||
              expectedCTC.includes("lakh")
            ) {
              ctcCond = expectedCTC.includes(filterConditions.expectedCTC.toLocaleLowerCase());
            } else {
              // console.log(expectedCTC.match(/\d+/g), expectedCTC);
              function doesMatch() {
                const arr = expectedCTC.match(/\d+/g);
                arr.forEach((item) => {
                  if (item.includes(expectedCTC)) {
                    console.log(item, expectedCTC);
                    ctcCond = true;
                  }
                });
              }
              doesMatch();
            }
          }

          let searchCondition = true;
          if (searchField.length) {
            searchCondition =
              candidate.fieldOfJob?.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()) ||
              candidate.skills?.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
          }

          let jobCondition = true;
          if (filterJob) {
            jobCondition = candidate.fieldOfJob
              ?.toLocaleLowerCase()
              .includes(filterJob.value.toLocaleLowerCase());
          }

          let yearCond = candidate.totalYearsOfexperience?.includes(exp);

          return ctcCond && yearCond && searchCondition && jobCondition;
        } catch (err) {
          console.log(err);
          return false;
        }
      })
    );
  }, [applicationData, searchField, filterConditions, filterRadios, filterJob]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 920) {
        SetIsvisible(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  logEvent(analytics, "View Page Loaded");
  return (
    <div className={isVisible ? "aa invisible" : "aa"}>
      {allowed && <Navigate to="/dashboard" replace={true} />}
      <div className="main">
        <div className={isVisible ? "main-left visible" : "main-left"} style={{}}>
          <p className="filter2">
            <button
              onClick={() => {
                SetIsvisible(!isVisible);
              }}
            >
              <i className="fa-solid fa-sliders"></i>
            </button>
          </p>
          <h2>Filter</h2>
          <hr />

          <h3>Years of Experience</h3>
          <RadioButtons
            filterRadios={filterRadios}
            SetFilterRadios={SetFilterRadios}
            radioText={["0-1", "1-2", "2-3", "3-5", "5-7", "7-10", "10-15", "15+"]}
          />
          <hr />

          <h3>Field of Job</h3>
          <div style={{ width: "65%" }}>
            <Select
              options={allJobs}
              value={filterJob}
              onChange={(value) => {
                SetFilterJob(value);
              }}
            />
          </div>
          <hr />

          <h3>CTC</h3>
          <div className="inp-ctc">
            <input
              placeholder="Search by CTC (LPA)"
              type="number"
              onChange={(event) => {
                SetFilterConditions({
                  ...filterConditions,
                  expectedCTC: event.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="main-right">
          <SearchBox
            SetSearchField={SetSearchField}
            isVisible={isVisible}
            SetIsvisible={SetIsvisible}
          />
          <div className="details">
            <p>Showing {filteredData.length} results</p>
            <p>Candidates</p>
          </div>
          <div className="applications-container">
            {applicationData.length ? (
              <MultiApplication data={filteredData} />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const MultiApplication = ({ data }) => {
  const arr = [];
  for (let i = 0; i < data.length; i++) {
    arr.push(<Application data={data[i]} key={i} />);
  }
  return (
    <div className="applications ">
      <div className="application applications__header" style={{ border: "none" }}>
        <h2>Name</h2>
        <p>Email</p>
        <p>College</p>
        <p className="bl-r">Company</p>
      </div>
      {arr}
    </div>
  );
};

function RadioButtons({ radioText, filterRadios, SetFilterRadios, style }) {
  const radiohandler = (n) => {
    n--;
    const temp = [...filterRadios];
    for (let i = 0; i < 8; i++) {
      if (i === n) {
        temp[n] = true;
      } else {
        temp[i] = false;
      }
    }
    SetFilterRadios(temp);
  };

  return (
    <div className="filter-radios" style={style}>
      {radioText.map((text, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              id={`rad${i + 1}`}
              name="all"
              value="all"
              checked={filterRadios[i]}
              onChange={() => {
                radiohandler(i + 1);
              }}
            />
            <label htmlFor={`rad${i + 1}`}>{text}</label>
          </div>
        );
      })}
    </div>
  );
}

function SearchBox({ isVisible, SetIsvisible, SetSearchField }) {
  return (
    <div className="search-box">
      <p className="magnify">
        <i className="fa-solid fa-magnifying-glass"></i>
      </p>
      <div className="inp-d">
        <input
          placeholder="Search by job or skills"
          type="search"
          onChange={(event) => {
            SetSearchField(event.target.value.toLocaleLowerCase());
          }}
        />
      </div>
      {isVisible ? (
        ""
      ) : (
        <p className={isVisible ? "filter filter-pos" : "filter"}>
          <button
            onClick={() => {
              SetIsvisible(!isVisible);
            }}
          >
            <i className="fa-solid fa-sliders"></i>
          </button>
        </p>
      )}
    </div>
  );
}

const allJobs = [
  {
    label: "Frontend Developer",
    value: "front",
  },
  {
    label: "Backend Developer",
    value: "back",
  },
  {
    label: "Product Manager",
    value: "product",
  },
];
