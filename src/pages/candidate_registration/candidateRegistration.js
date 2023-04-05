import "./candidateRegister.style.scss";
import logo from "./logo192.png";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import { Alert, Button, Typography } from "@mui/material";
import LinksAndResume from "./steps/LandR";
import EducationalDetails from "./steps/EducationalDetails";
import PersonalDetails from "./steps/PersonalDetails";
import JobDetails from "./steps/JobDetails";
import useMediaQuery from "@mui/material/useMediaQuery";

const steps = ["Personal Details", "Education Details","Job Details", "Links and Resume"];

export default function CandidateRegistration() {
	const smallScreen = useMediaQuery("(min-width:1300px)");
	const mobileScreen = useMediaQuery("(max-width:530px)");
	const [activeStep, setActiveStep] = useState(0);
	const [skipped, setSkipped] = useState(new Set());
	const [open, setOpen] = useState(false);
	const [form, setForm] = useState({
		firstName: "",
		middleName: "",
		lastName: "",
		email: "",
		phone: "",
		college: "",
		yearOfPassing: "",
		backlogs: "",
		branch: "",
		CGPA: "",
		preferredLocation: "",
		totalYearsOfExperience: "",
		fieldOfJob: "",
		skills: "",
		joiningDate: "",
		achievements: "",
		codeChefID: "",
		leetCodeID: "",
		linkedIn: "",
		codeForcesID: "",
		gitHub: "",
		resume: "",
		prevoiusCompany: "",
		prevoiusJobTitle: "",
		ExpectedCTC: "",
	});

	const handleOpen = () => setOpen(true);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
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
			(form.firstName === "" ||
				form.lastName === "" ||
				form.email === "" ||
				form.phone === "")
		) {
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
			handleOpen();
			return;
		}

		if (
			activeStep === 2 &&
			(form.preferredLocation === "" ||
				form.totalYearsOfExperience === "" ||
				form.fieldOfJob === "" ||
				form.skills === "" || 
				form.joiningDate === "" ||
				form.achievements === "")
		) {
			handleOpen();
			return;
		}

		// TODO: Add validation for links and resume

		if (activeStep === 3) {
			console.log(form);
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

	return (
		<div className="register">
			<div className="register__container">
				<div className="register__titleholder">
					<img className="register__logo" src={logo} />
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
												fontSize={smallScreen ? 32 : 18}
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
						Please enter all the required fields!
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
