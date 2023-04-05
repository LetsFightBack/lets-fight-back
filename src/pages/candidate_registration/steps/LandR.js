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
			{form.totalYearsOfExperience !== "NiL" ? (
				<div className="form__leftFields">
					<div className="form__field">
						<Typography
							variant={mobileScreen ? "h6" : "h5"}
							component="div"
							sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
						>
							Previous Company Name
						</Typography>

						<input
							type="text"
							placeholder="Enter your code chef handle"
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
							Previous Job Title
						</Typography>
						<input
							type="text"
							placeholder="Enter your code forces handle"
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
							Expected CTC
						</Typography>
						<input
							type="text"
							placeholder="Enter your leet code handle"
							className="form__input"
							value={form.ExpectedCTC}
							onChange={(e) =>
								setForm({ ...form, leetCodeID: e.target.value })
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
							Code Chef Handle
						</Typography>

						<input
							type="text"
							placeholder="Enter your code chef handle"
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
							Code Forces Handle
						</Typography>
						<input
							type="text"
							placeholder="Enter your code forces handle"
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
							Leet Code Handle
						</Typography>
						<input
							type="text"
							placeholder="Enter your leet code handle"
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
						LinkdIn Profile
					</Typography>
					<input
						type="text"
						placeholder="Enter your LinkedIn profile link"
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
						Github Profile
					</Typography>
					<input
						type="text"
						placeholder="Enter your github profile link"
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
						Resume
					</Typography>
					<input
						type="text"
						placeholder="Enter your resume link"
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
