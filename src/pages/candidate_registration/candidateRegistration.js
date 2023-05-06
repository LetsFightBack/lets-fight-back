import "./candidateRegister.style.scss";
import logo from "./logo192.png";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Snackbar from "@mui/material/Snackbar";
import { useEffect, useState } from "react";
import { Alert, Button, Typography } from "@mui/material";
import LinksAndResume from "./steps/LandR";
import EducationalDetails from "./steps/EducationalDetails";
import PersonalDetails from "./steps/PersonalDetails";
import JobDetails from "./steps/JobDetails";
import useMediaQuery from "@mui/material/useMediaQuery";
import AuthPopup from "../../components/authPopup/authPopup";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUserToDB, addVisitorToDB, auth } from "../../firebase";
import {useNavigate} from "react-router-dom"

const steps = [
  "Personal Details",
  "Education Details",
  "Job Details",
  "Links and Resume",
];



export default function CandidateRegistration() {
  const [openAuthPopup, setOpenAuthPopup] = useState(true);
  const smallScreen = useMediaQuery("(min-width:1300px)");
  const mobileScreen = useMediaQuery("(max-width:530px)");
  const [errorText, setErrorText] = useState("");
  const [successText, setsuccessText] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const { currentUser } = getAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    college: "",
    yearOfPassing: "",
    backlogs: "",
    branch: "",
    CGPA: "",
    preferredCity: "",
    totalYearsOfexperience: "",
    fieldOfJob: "",
    skills: "",
    joinInfo: "",
    achievements: "",
    codeChefID: "",
    leetCodeID: "",
    linkedinProfile: "",
    codeForcesID: "",
    gitHub: "",
    resumelink: "",
    previousCompany: "",
    prevoiusCompanyProfile: "",
    expectedCTC: "",
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        setForm({...form,email:user.email})
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpen = () => setOpen(true);
  const handleSuccessOpen = () => setOpenSuccess(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleSteps = (step, form, setForm) => {
    switch (step) {
      case 0:
        return <PersonalDetails form={form} setForm={setForm} />;
      case 1:
        return <EducationalDetails form={form} setForm={setForm} />;
      case 2:
        return <JobDetails form={form} setForm={setForm} />;
      case 3:
        return <LinksAndResume form={form} setForm={setForm} />;
      default:
        throw new Error("Unknown step");
    }
  };

  const handleNext = () => {
    if (
      activeStep === 0 &&
      (form.firstName === "" || form.lastName === "" || form.mobileNo === "")
    ) {
      setErrorText("Please fill all the fields");
      console.log(form);
      handleOpen();
      return;
    }

    if (activeStep === 0 && !isFirstNameValid(form.firstName)) {
      setErrorText("Please enter a valid first name");
      handleOpen();
      return;
    }

    // if (activeStep === 0 && !isEmailValid(form.email)) {
    //   setErrorText("Please enter a valid email");
    //   console.log(form);
    //   handleOpen();
    //   return;
    // }

    if (activeStep === 0 && !ismobileNoValid(form.mobileNo)) {
      setErrorText("Please enter a valid mobileNo number");
      handleOpen();
      return;
    }

    if (
      activeStep === 1 &&
      (form.college === "" ||
        form.yearOfPassing === "" ||
        form.branch === "" ||
        form.CGPA === "" ||
        form.backlogs === "")
    ) {
      setErrorText("Please fill all the fields");
      handleOpen();
      return;
    }

    if (activeStep === 1 && !isValidPassingYear(form.yearOfPassing)) {
      setErrorText("Please enter a valid year of passing");
      handleOpen();
      return;
    }

    if (activeStep === 1 && !isBacklogValid(form.backlogs)) {
      setErrorText("Please enter a valid number of backlogs");
      handleOpen();
      return;
    }

    if (activeStep === 1 && !isCgpaValid(form.CGPA)) {
      setErrorText("Please enter a valid CGPA");
      handleOpen();
      return;
    }

    if (
      activeStep === 2 &&
      (form.preferredCity === "" ||
        form.totalYearsOfexperience === "" ||
        form.fieldOfJob === "" ||
        form.skills === "" ||
        form.joinInfo === "")
    ) {
      console.log(form);
      setErrorText("Please fill all the fields");
      handleOpen();
      return;
    }

    if (
      activeStep === 3 &&
      form.totalYearsOfexperience !== "Fresher (Graduate)" &&
      form.totalYearsOfexperience !== "Fresher (Post Graduate)"
    ) {
      if (
        form.previousCompany === "" ||
        form.prevoiusCompanyProfile === "" ||
        form.expectedCTC === ""
      ) {
        setErrorText("Please fill all the fields");
        handleOpen();
        return;
      }
      if (!isexpectedCTCValid(form.expectedCTC)) {
        setErrorText("Please enter a valid CTC");
        handleOpen();
        return;
      }
    }

    if (
      activeStep === 3 &&
      (form.totalYearsOfexperience === "Fresher (Graduate)" ||
        form.totalYearsOfexperience === "Fresher (Post Graduate)")
    ) {
      if (
        form.codeChefID === "" ||
        form.leetCodeID === "" ||
        form.codeForcesID === ""
      ) {
        setErrorText("Please fill all the fields");
        handleOpen();
        return;
      }
    }

    if (
      activeStep === 3 &&
      (form.gitHub === "" ||
        form.linkedinProfile === "" ||
        form.resumelink === "")
    ) {
      setErrorText("Please fill all the fields");
      handleOpen();
      return;
    } else if (activeStep === 3  && !isResumeValid(form.resumelink)) {
      setErrorText("Please upload a valid resumelink");
      handleOpen();
      return;
    } else if (
      activeStep === 3 &&
      !islinkedinProfileValid(form.linkedinProfile)
    ) {
      setErrorText("Please enter a valid linkedin profile link");
      handleOpen();
      return;
    }

    if (
      form.totalYearsOfexperience !== "Fresher (Graduate)" &&
      form.totalYearsOfexperience !== "Fresher (Post Graduate)"
    ) {
      setForm({ ...form, codeChefID: "", leetCodeID: "", codeForcesID: "" });
    } else {
      setForm({
        ...form,
        previousCompany: "",
        prevoiusCompanyProfile: "",
        expectedCTC: "",
      });
    }

    if (activeStep === 3) {
      if (currentUser.email) {
        setForm({ ...form, email: currentUser?.email });
        console.log("form ", form);
        addUserToDB(form)
          .then(() => {
            setsuccessText("Successfully added as a user!");
            setOpenSuccess(true)
            setTimeout(()=>navigate("/jobpost"),2000)
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return;
    }

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      return;
    }

    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const mobileNoRegex = /^\+?\d{1,3}[- ]?\d{10}$/;
  const yearRegex = /^(19|20)\d{2}$/;
  const backlogRegex = /^\d{1}$/;
  const cgpaRegex = /^([0-9]|10)(\.[0-9]{1,2})?$/;
  const firstNameRegex = /^[a-zA-Z]+$/;
  const linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
  const resumeRegex = /^https?:\/\/(drive\.google\.com\/|(www\.)?drive.google.com\/)[a-zA-Z0-9-_./?=&]+$/;

  const islinkedinProfileValid = (linkedinProfileUrl) => {
    return linkedinRegex.test(linkedinProfileUrl);
  };

  const isResumeValid = (resumelinkUrl) => {
    return resumeRegex.test(resumelinkUrl);
  };

  const isFirstNameValid = (firstName) => {
    return firstNameRegex.test(firstName);
  };

  const ismobileNoValid = (mobileNo) => {
    return mobileNoRegex.test(mobileNo);
  };

  const isValidPassingYear = (year) => {
    return yearRegex.test(year);
  };

  const isBacklogValid = (backlog) => {
    return backlogRegex.test(backlog);
  };

  const isCgpaValid = (cgpa) => {
    return cgpaRegex.test(cgpa);
  };

  const isexpectedCTCValid = (ctc) => {
    return /^\d+(\.\d{1,2})?$/.test(ctc) && parseFloat(ctc) > 0;
  };

  return (
    <div className="register">
      <AuthPopup open={openAuthPopup} setOpen={setOpenAuthPopup} />
      <div className="register__container">
        <div className="register__titleholder">
          <img className="register__logo" src={logo} alt="loading" />
          <h1 className="register__title">Candidate Registration</h1>
        </div>
        {!mobileScreen && (
          <div className="register__form">
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              sx={{ width: "100%", mt: "-10px" }}
            >
              {steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepLabel>
                      <Typography
                        fontSize={smallScreen ? 26 : 18}
                        fontWeight="700"
                      >
                        {label}
                      </Typography>
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </div>
        )}
        {handleSteps(activeStep, form, setForm)}
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{
              width: "100%",
              fontSize: "25px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {errorText}
          </Alert>
        </Snackbar>
        <Snackbar
          open={openSuccess}
          autoHideDuration={6000}
          onClose={handleSuccessClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleSuccessOpen}
            severity="success"
            sx={{
              width: "100%",
              fontSize: "25px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {successText}
          </Alert>
        </Snackbar>
        <div className="register__formControl">
          {activeStep !== 0 && (
            <Button
              variant="contained"
              size={mobileScreen ? "medium" : "large"}
              sx={{
                width: mobileScreen ? 150 : 200,
                fontSize: "22px",
                borderRadius: "9.3987px",
              }}
              onClick={handleBack}
            >
              Prev
            </Button>
          )}
          <Button
            variant="contained"
            color="success"
            size={mobileScreen ? "medium" : "large"}
            sx={{
              width: mobileScreen ? 150 : 200,
              fontSize: "22px",
              borderRadius: "9.3987px",
            }}
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
