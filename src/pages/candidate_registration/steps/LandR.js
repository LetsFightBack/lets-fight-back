import { TextField, Typography, useMediaQuery } from "@mui/material";
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
		
			{(form.totalYearsOfExperience !== "Fresher (Graduate)") && (form.totalYearsOfExperience !== "Fresher (Post Graduate)") ? (
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
							value={form.prevoiusCompany}
							onChange={(e) =>
								setForm({ ...form, prevoiusCompany: e.target.value })
							}
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
							value={form.prevoiusJobTitle}
							onChange={(e) =>
								setForm({
									...form,
									prevoiusJobTitle: e.target.value,
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
							Expected CTC *
						</Typography>
						<input
							type="text"
							placeholder="in LPA"
							className="form__input"
							value={form.ExpectedCTC}
							onChange={(e) =>
								setForm({ ...form, ExpectedCTC: e.target.value })
							}
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
							CodeChef*
						</Typography>

						<input
							type="text"
							placeholder="E.g - rohit_123, etc."
							className="form__input"
							value={form.codeChefID}
							onChange={(e) =>
								setForm({ ...form, codeChefID: e.target.value })
							}
						/>
					</div>
					<div className="form__field">
						<Typography
							variant={mobileScreen ? "h6" : "h5"}
							component="div"
							sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
						>
							Code Forces Handle *
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
							Leet Code Handle *
						</Typography>
						<input
							type="text"
							placeholder="E.g - rohit_123, etc."
							className="form__input"
							value={form.leetCodeID}
							onChange={(e) =>
								setForm({ ...form, leetCodeID: e.target.value })
							}
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
						placeholder="E.g - https://www.linkedin.com/in/rohit-123/"
						className="form__input"
						value={form.linkedIn}
						onChange={(e) =>
							setForm({ ...form, linkedIn: e.target.value })
						}
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
						onChange={(e) =>
							setForm({ ...form, gitHub: e.target.value })
						}
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
						placeholder="Resume link"
						className="form__input"
						value={form.resume}
						onChange={(e) =>
							setForm({ ...form, resume: e.target.value })
						}
					/>
				</div>
			</div>
		</div>
	);
}
 