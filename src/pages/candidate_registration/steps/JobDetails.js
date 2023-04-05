import { TextField, Typography, useMediaQuery } from "@mui/material";
import "./form.style.scss";

    export default function JobDetils({ form, setForm }) {
	const mobileScreen = useMediaQuery("(max-width:530px)");

	return (
		<div className="form">
			{mobileScreen && (
				<div className="form__titleHolder">
					<h1 className="form__title">Job Details</h1>
				</div>
			)}
			<div className="form__leftFields">
				<div className="form__field">
					<Typography
						variant={mobileScreen ? "h6" : "h5"}
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Preferred Job Location
					</Typography>

					<input
						type="text"
						placeholder="Enter your preferred job location"
						className="form__input"
						value={form.preferredLocation}
						onChange={(e) =>
							setForm({ ...form, preferredLocation: e.target.value })
						}
					/>
				</div>
				<div className="form__field">
					<Typography
						variant={mobileScreen ? "h6" : "h5"}
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Total Year of Experience
					</Typography>

					<input
						type="text"
						placeholder="Enter NiL if not applicable"
						className="form__input"
						value={form.totalYearsOfExperience}
						onChange={(e) =>
							setForm({ ...form, totalYearsOfExperience: e.target.value })
						}
					/>
				</div>
				<div className="form__field">
					<Typography
						variant={mobileScreen ? "h6" : "h5"}
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Feild of Job
					</Typography>

					<input
						type="text"
						placeholder="Enter your preferred feild of job"
						className="form__input"
						value={form.fieldOfJob}
						onChange={(e) =>
							setForm({ ...form, fieldOfJob: e.target.value })
						}
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
						Skills
					</Typography>
					<input
						type="text"
						placeholder="Enter your skills (separated by comma)"
						className="form__input"
						value={form.skills}
						onChange={(e) =>
							setForm({ ...form, skills: e.target.value })
						}
					/>
				</div>
				<div className="form__field">
					<Typography
						variant={mobileScreen ? "h6" : "h5"}
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						When would be able to join
					</Typography>

					<input
						type="text"
						placeholder="Enter your preferred joining date"
						className="form__input"
						value={form.joiningDate}
						onChange={(e) =>
							setForm({ ...form, joiningDate: e.target.value })
						}
					/>
				</div>
				<div className="form__field">
					<Typography
						variant={mobileScreen ? "h6" : "h5"}
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Achievements
					</Typography>

					<input
						type="text"
						placeholder="Enter your achievements (separated by comma)"
						className="form__input"
						value={form.achievements}
						onChange={(e) =>
							setForm({ ...form, achievements: e.target.value })
						}
					/>
				</div>
			</div>
		</div>
	);
}
