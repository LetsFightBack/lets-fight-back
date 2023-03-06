import "./view.style.scss";
import { useState, useEffect } from "react";
import Application from "../../components/application/application.component";
import { getAllCandidates, getLoginDetails } from "../../utils/firebase/firebase.utils";
import { Box, CircularProgress } from "@mui/material";
import { AES, enc } from "crypto-js";
import Paper from "@mui/material/Paper";
const SECRET_KEY = "wq893258yt35gh8989";
const DURATION = 1000 * 60 * 60 * 24;

export default function View() {
  // const [dropdownstate, SetDropdownstate] = useState([false]);
  const [isVisible, SetIsvisible] = useState(false);
  const [searchField, SetSearchField] = useState("");
  const [applicationData, SetApplicationData] = useState([]);
  const [filteredData, SetFilteredData] = useState([]);
  const [filterRadios, SetFilterRadios] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [filterConditions, SetFilterConditions] = useState({});

  useEffect(() => {
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
        let ctcCond = candidate.expectedCTC;
        ctcCond += " ";
        if (!filterConditions.expectedCTC) {
          ctcCond = true;
        } else {
          ctcCond = ctcCond.includes(filterConditions.expectedCTC);
        }

        let searchCondition = true;
        if (searchField.length) {
          searchCondition =
            candidate.fieldOfJob.includes(searchField) || candidate.skills.includes(searchField);
        }

        let yearCond = candidate.totalYearsOfexperience.includes(exp);

        return ctcCond && yearCond && searchCondition;
      })
    );
  }, [applicationData, searchField, filterConditions, filterRadios]);

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

  return (
    <div className={isVisible ? "aa invisible" : "aa"}>
      <h1>Accepted applications</h1>
      <div className="underline"></div>

      <div className="main">
        <div className={isVisible ? "main-left visible" : "main-left"}>
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
    <div className="applications">
      <div className="applicationHeader application__header">
        <h2>Name</h2>
        <h2 className="application__email">Email</h2>
        <h2>College</h2>
        <h2 className="bl-r">Company</h2>
        <p></p>
      </div>
      {arr}
    </div>
  );
};

function RadioButtons({ radioText, filterRadios, SetFilterRadios }) {
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
    <div className="filter-radios">
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
