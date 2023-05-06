import { Typography, useMediaQuery } from "@mui/material";
import "./form.style.scss";

export default function LinksAndResume({ form, setForm }) {
  const mobileScreen = useMediaQuery("(max-width:530px)");

  return (
    <div className="form">
      {mobileScreen && (
        <div className="form__titleHolder">
          <h1 className="form__title">Links and Resume</h1>
        </div>
      )}

      {form.totalYearsOfexperience !== "Fresher (Graduate)" &&
      form.totalYearsOfexperience !== "Fresher (Post Graduate)" ? (
        <div className="form__leftFields">
          <div className="form__field">
            <Typography
              variant={mobileScreen ? "h6" : "h5"}
              component="div"
              sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
            >
              Previous Company Name *
            </Typography>

            <input
              type="text"
              placeholder="E.g - Google, Microsoft, etc."
              className="form__input"
              value={form.previousCompany}
              onChange={(e) => setForm({ ...form, previousCompany: e.target.value })}
            />
          </div>
          <div className="form__field">
            <Typography
              variant={mobileScreen ? "h6" : "h5"}
              component="div"
              sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
            >
              Previous Job Title *
            </Typography>
            <input
              type="text"
              placeholder="E.g - Software Engineer, etc."
              className="form__input"
              value={form.prevoiusCompanyProfile}
              onChange={(e) =>
                setForm({
                  ...form,
                  prevoiusCompanyProfile: e.target.value,
                })
              }
            />
          </div>
          <div className="form__field">
            <Typography
              variant={mobileScreen ? "h6" : "h5"}
              component="div"
              sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
            >
              Expected CTC (in LPA) *
            </Typography>
            <input
              type="number"
              placeholder="E.g - 10, 15"
              className="form__input"
              value={form.expectedCTC}
              onChange={(e) => setForm({ ...form, expectedCTC: e.target.value })}
            />
          </div>
        </div>
      ) : (
        <div className="form__leftFields">
          <div className="form__field">
            <Typography
              variant={mobileScreen ? "h6" : "h5"}
              component="div"
              sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
            >
              Codechef Handle *
            </Typography>

            <input
              type="text"
              placeholder="E.g - rohit_123, etc."
              className="form__input"
              value={form.codeChefID}
              onChange={(e) => setForm({ ...form, codeChefID: e.target.value })}
            />
          </div>
          <div className="form__field">
            <Typography
              variant={mobileScreen ? "h6" : "h5"}
              component="div"
              sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
            >
              Codeforces Handle *
            </Typography>
            <input
              type="text"
              placeholder="E.g - rohit_123, etc."
              className="form__input"
              value={form.codeForcesID}
              onChange={(e) =>
                setForm({
                  ...form,
                  codeForcesID: e.target.value,
                })
              }
            />
          </div>
          <div className="form__field">
            <Typography
              variant={mobileScreen ? "h6" : "h5"}
              component="div"
              sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
            >
              Leetcode Handle *
            </Typography>
            <input
              type="text"
              placeholder="E.g - rohit_123, etc."
              className="form__input"
              value={form.leetCodeID}
              onChange={(e) => setForm({ ...form, leetCodeID: e.target.value })}
            />
          </div>
        </div>
      )}
      <div className="form__rightFields">
        <div className="form__field">
          <Typography
            variant={mobileScreen ? "h6" : "h5"}
            component="div"
            sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
          >
            LinkedIn Profile *
          </Typography>
          <input
            type="text"
            placeholder="E.g - https://www.linkedinProfile.com/in/rohit-123/"
            className="form__input"
            value={form.linkedinProfile}
            onChange={(e) => setForm({ ...form, linkedinProfile: e.target.value })}
          />
        </div>

        <div className="form__field">
          <Typography
            variant={mobileScreen ? "h6" : "h5"}
            component="div"
            sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
          >
            Github Profile *
          </Typography>
          <input
            type="text"
            placeholder="E.g - rohit_123"
            className="form__input"
            value={form.gitHub}
            onChange={(e) => setForm({ ...form, gitHub: e.target.value })}
          />
        </div>
        <div className="form__field">
          <Typography
            variant={mobileScreen ? "h6" : "h5"}
            component="div"
            sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
          >
            Resume *
          </Typography>
          <input
            type="text"
            placeholder="Google drive resume link"
            className="form__input"
            value={form.resumelink}
            onChange={(e) => setForm({ ...form, resumelink: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}