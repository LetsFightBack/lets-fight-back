import "./view.style.scss";
import { useState, useEffect } from "react";
import Application from "../../components/application/application.component";
import AnimatedNav from "../../components/animations/animateddropdown.component";
import { getAllCandidates } from "../../utils/firebase/firebase.utils";

export default function View() {
  const [dropdownstate, SetDropdownstate] = useState([true, false, false, false]);
  const [isVisible, SetIsvisible] = useState(false);
  const [searchField, SetSearchField] = useState("");
  const [applicationData, SetApplicationData] = useState([]);
  const [filteredData, SetFilteredData] = useState([]);
  const [filterRadios, SetFilterRadios] = useState([true, false, false, false]);
  const [filterConditions, SetFilterConditions] = useState({});

  useEffect(() => {
    getAllCandidates().then((data) => {
      SetApplicationData(data);
      console.log(data[0]);
    });
  }, []);

  useEffect(() => {
    let condition = filterConditions;
    const statusNo = () => {
      const n = filterRadios.findIndex((el) => el === true);
      switch (n) {
        case 0:
          return "0-1";
        case 1:
          return "1-2";
        case 2:
          return "2-3";
        default:
          return "5+";
      }
    };
    let exp = statusNo();
    console.log(exp, condition);
    SetFilteredData(
      applicationData.filter((candidate) => {
        // let c1 = candidate.expectedCTC;
        // c1.includes()
        // c1 = c1 < exp;

        // let c2 = candidate.skills;

        let c3 = candidate.totalYearsOfexperience.includes(exp);

        return c3;
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

  const checkboxchange = (event) => {
    const temp = { ...filterConditions };
    if (temp.skills) {
      const fi = temp.skills.findIndex((item) => {
        return item === event.target.name;
      });
      if (fi !== -1) {
        temp.skills.splice(fi, 1);
      } else {
        temp.skills.push(event.target.name);
      }
    } else {
      temp.skills = [event.target.name];
    }
    SetFilterConditions(temp);
  };

  const dropdownhandler = (n) => {
    n--;
    const temp = [...dropdownstate];
    for (let i = 0; i < 4; i++) {
      if (i === n) {
        temp[n] = !temp[n];
      } else {
        temp[i] = false;
      }
    }
    SetDropdownstate(temp);
  };

  const radiohandler = (n) => {
    n--;
    const temp = [...filterRadios];
    for (let i = 0; i < 4; i++) {
      if (i === n) {
        temp[n] = true;
      } else {
        temp[i] = false;
      }
    }
    SetFilterRadios(temp);
  };

  const statustext = () => {
    const n = filterRadios.findIndex((el) => el === true);
    switch (n) {
      case 0:
        return "0-1 years";
      case 1:
        return "1-2 years";
      case 2:
        return "2-3 years";
      default:
        return "5+ years";
    }
  };

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
          <div className="filter-radios">
            <div>
              <input
                type="radio"
                id="rad1"
                name="all"
                value="all"
                checked={filterRadios[0]}
                onChange={() => {
                  radiohandler(1);
                }}
              />
              <label htmlFor="rad1">0-1</label>
            </div>
            <div>
              <input
                type="radio"
                id="rad2"
                name="firstdelivery"
                value="firstdelivery"
                checked={filterRadios[1]}
                onChange={() => {
                  radiohandler(2);
                }}
              />
              <label htmlFor="rad2">1-2</label>
            </div>
            <div>
              <input
                type="radio"
                id="rad3"
                name="completed"
                value="completed"
                checked={filterRadios[2]}
                onChange={() => {
                  radiohandler(3);
                }}
              />
              <label htmlFor="rad3">2-3</label>
            </div>
            <div>
              <input
                type="radio"
                id="rad4"
                name="terminated"
                value="terminated"
                checked={filterRadios[3]}
                onChange={() => {
                  radiohandler(4);
                }}
              />
              <label htmlFor="rad4">5+</label>
            </div>
          </div>
          <hr />

          <h3>CTC</h3>
          <div className="inp-ctc">
            <input
              placeholder="Search by CTC"
              type="number"
              onChange={(event) => {
                SetFilterConditions({ ...filterConditions, expectedCTC: event.target.value });
              }}
            />
          </div>
          <hr />

          <h3>Skills</h3>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => dropdownhandler(1)}>
              <p>Web Development</p>
              <p>
                <i className="fa-solid fa-angle-down"></i>
              </p>
            </button>
            {dropdownstate[0] ? (
              <AnimatedNav className="dropdown-content">
                <div className="inp-container">
                  <input
                    type="checkbox"
                    name="full stack"
                    checked={filterConditions[1]}
                    onChange={(event) => checkboxchange(event)}
                  />
                  <label>Full Stack</label>
                </div>
                <div className="inp-container">
                  <input
                    type="checkbox"
                    name="backend"
                    checked={filterConditions[2]}
                    onChange={(event) => checkboxchange(event)}
                  />
                  <label>Backend</label>
                </div>
                <div className="inp-container">
                  <input
                    type="checkbox"
                    name="front"
                    checked={filterConditions[3]}
                    onChange={(event) => checkboxchange(event)}
                  />
                  <label>Frontend</label>
                </div>
                <div className="inp-container">
                  <input
                    type="checkbox"
                    name="database"
                    checked={filterConditions[4]}
                    onChange={(event) => checkboxchange(event)}
                  />
                  <label>Database Management</label>
                </div>
              </AnimatedNav>
            ) : (
              ""
            )}
          </div>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => dropdownhandler(2)}>
              <p>App Development</p>
              <p>
                <i className="fa-solid fa-angle-down"></i>
              </p>
            </button>
            {dropdownstate[1] ? (
              <AnimatedNav className="dropdown-content">
                <div className="inp-container">
                  <input
                    type="checkbox"
                    name="flutter"
                    checked={filterConditions[5]}
                    onChange={(event) => checkboxchange(event)}
                  />
                  <label>Flutter</label>
                </div>
                <div className="inp-container">
                  <input
                    type="checkbox"
                    name="java"
                    checked={filterConditions[6]}
                    onChange={(event) => checkboxchange(event)}
                  />
                  <label>Java/Kotlin</label>
                </div>
                <div className="inp-container">
                  <input
                    type="checkbox"
                    name="native"
                    checked={filterConditions[7]}
                    onChange={(event) => checkboxchange(event)}
                  />
                  <label>React Native</label>
                </div>
                <div className="inp-container">
                  <input
                    type="checkbox"
                    name="android"
                    checked={filterConditions[8]}
                    onChange={(event) => checkboxchange(event)}
                  />
                  <label>Android Compose Camp</label>
                </div>
              </AnimatedNav>
            ) : (
              ""
            )}
          </div>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => dropdownhandler(3)}>
              <p>SDE</p>
              <p>
                <i className="fa-solid fa-angle-down"></i>
              </p>
            </button>
            {dropdownstate[2] ? (
              <AnimatedNav className="dropdown-content">
                <div className="inp-container">
                  <input
                    type="checkbox"
                    name="w1"
                    checked={filterConditions[9]}
                    onChange={(event) => checkboxchange(event)}
                  />
                  <label>Wave 9 - First Quarter</label>
                </div>
                <div className="inp-container">
                  <input
                    type="checkbox"
                    name="w2"
                    checked={filterConditions[10]}
                    onChange={(event) => checkboxchange(event)}
                  />
                  <label>Wave 10 - Second Quarter</label>
                </div>
                <div className="inp-container">
                  <input
                    type="checkbox"
                    name="w3"
                    checked={filterConditions[11]}
                    onChange={(event) => checkboxchange(event)}
                  />
                  <label>Wave 11 - Third Quarter</label>
                </div>
                <div className="inp-container">
                  <input
                    type="checkbox"
                    name="w4"
                    checked={filterConditions[12]}
                    onChange={(event) => checkboxchange(event)}
                  />
                  <label>Wave 12 - Fourth Quarter</label>
                </div>
              </AnimatedNav>
            ) : (
              ""
            )}
          </div>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => dropdownhandler(4)}>
              <p>Others</p>
              <p>
                <i className="fa-solid fa-angle-down"></i>
              </p>
            </button>
            {dropdownstate[3] ? (
              <AnimatedNav className="dropdown-content">
                <div className="inp-container">
                  <input
                    type="checkbox"
                    name="w1"
                    checked={filterConditions[13]}
                    onChange={(event) => checkboxchange(event)}
                  />
                  <label>Wave 13 - First Quarter</label>
                </div>
                <div className="inp-container">
                  <input
                    type="checkbox"
                    name="w2"
                    checked={filterConditions[14]}
                    onChange={(event) => checkboxchange(event)}
                  />
                  <label>Wave 14 - Second Quarter</label>
                </div>
              </AnimatedNav>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="main-right">
          <div className="search-box">
            <p className="magnify">
              <i className="fa-solid fa-magnifying-glass"></i>
            </p>
            <div className="inp-d">
              <input
                placeholder="Search by projects or team"
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
          <div className="details">
            <p>Showing {filteredData.length} results</p>
            <p>{statustext()}</p>
          </div>
          <div className="applications-container">
            <MultiApplication data={filteredData} />
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
  return <div className="applications">{arr}</div>;
};
