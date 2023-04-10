import { Typography, useMediaQuery } from "@mui/material";
import branchList from "./branches.json";
import collegeList from "../../../colleges.json";
import "./form.style.scss";

export default function EducationalDetails({ form, setForm }) {
  const mobileScreen = useMediaQuery("(max-width:530px)");

  return (
    <div className="form">
      {mobileScreen && (
        <div className="form__titleHolder">
          <h1 className="form__title">Educational Details</h1>
        </div>
      )}
      <div className="form__leftFields">
        <div className="form__field">
          <Typography
            variant={mobileScreen ? "h6" : "h5"}
            component="div"
            sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
          >
            College *
          </Typography>

          <select
            className="form__sInput"
            value={form.college}
            onChange={(e) => setForm({ ...form, college: e.target.value })}
          >
            <option value="">Select your College</option>
            {collegeList.map((name, i) => {
              return (
                <option value={name} key={i}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form__field">
          <Typography
            variant={mobileScreen ? "h6" : "h5"}
            component="div"
            sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
          >
            Year of Passing *
          </Typography>

          <input
            type="number"
            placeholder="Enter your year of passing"
            className="form__input"
            value={form.yearOfPassing}
            onChange={(e) => setForm({ ...form, yearOfPassing: e.target.value })}
          />
        </div>
        <div className="form__field">
          <Typography
            variant={mobileScreen ? "h6" : "h5"}
            component="div"
            sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
          >
            Backlogs *
          </Typography>

          <input
            type="number"
            placeholder="if not applicable, enter 0"
            className="form__input"
            value={form.backlogs}
            onChange={(e) => setForm({ ...form, backlogs: e.target.value })}
          />
        </div>
      </div>
      <div className="form__rightFields">
        <div className="form__field">
          <Typography
            variant={mobileScreen ? "h6" : "h5"}
            component="div"
            sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
          >
            Branch *
          </Typography>
          <select
            className="form__sInput"
            value={form.branch}
            onChange={(e) => setForm({ ...form, branch: e.target.value })}
          >
            <option value="">Select your Branch</option>
            {branchList.map((name, i) => {
              return (
                <option value={name} key={i}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form__field">
          <Typography
            variant={mobileScreen ? "h6" : "h5"}
            component="div"
            sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
          >
            CGPA *
          </Typography>

          <input
            type="number"
            placeholder="Enter your CGPA"
            className="form__input"
            value={form.CGPA}
            onChange={(e) => setForm({ ...form, CGPA: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}
