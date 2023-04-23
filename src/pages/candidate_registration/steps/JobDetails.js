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

					{/* <input
						type="text"
						placeholder="Enter your preferred job location"
						className="form__input"
						value={form.preferredLocation}
						onChange={(e) =>
							setForm({
								...form,
								preferredLocation: e.target.value,
							})
						}
					/> */}
					<select
						value={form.preferredLocation}
						onChange={(e) =>
							setForm({
								...form,
								preferredLocation: e.target.value,
							})
						}
						className="form__sInput"
					>
						<option value="Any">
							Any
						</option>
						<option value="Bangalore">Bangalore</option>
						<option value="Mumbai">Mumbai</option>
						<option value="Pune">Pune</option>
						<option value="Hyderabad">Hyderabad</option>
						<option value="Delhi">Delhi</option>
						<option value="Chennai">Chennai</option>
						<option value="Ahmedabad">Ahmedabad</option>
						<option value="Kochi">Kochi</option>
						<option value="Gurgao">Gurgao</option>
						<option value="Kolkata">Kolkata</option>
						<option value="Noida">Noida</option>
						<option value="Chandigarh">Chandigarh</option>
					</select>
				</div>
				<div className="form__field">
					<Typography
						variant={mobileScreen ? "h6" : "h5"}
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Total Year of Experience
					</Typography>

					{/* <input
						type="text"
						placeholder="Enter NiL if not applicable"
						className="form__input"
						value={form.totalYearsOfExperience}
						onChange={(e) =>
							setForm({ ...form, totalYearsOfExperience: e.target.value })
						}
					/> */}
					<select
						className="form__sInput"
						value={form.totalYearsOfExperience}
						onChange={(e) =>
							setForm({
								...form,
								totalYearsOfExperience: e.target.value,
							})
						}
					>
						<option value="Fresher (Graduate)">
							Fresher (Graduate)
						</option>
						<option value="Fresher (Post Graduate)">
							Fresher (Post Graduate)
						</option>
						<option value="0-1 Years">0-1 Years</option>
						<option value="1-2 Years">1-2 Years</option>
						<option value="2-3 Years">2-3 Years</option>
						<option value="3-5 Years">3-5 Years</option>
						<option value="5-7 Years">5-7 Years</option>
						<option value="7-10 Years">7-10 Years</option>
						<option value="10-15 Years">10-15 Years</option>
						<option value="15+ Years">15+ Years</option>
					</select>
				</div>
				<div className="form__field">
					<Typography
						variant={mobileScreen ? "h6" : "h5"}
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Feild of Job
					</Typography>

					{/* <input
						type="text"
						placeholder="Enter your preferred feild of job"
						className="form__input"
						value={form.fieldOfJob}
						onChange={(e) =>
							setForm({ ...form, fieldOfJob: e.target.value })
						}
					/> */}
					<select
						className="form__sInput"
						value={form.fieldOfJob}
						onChange={(e) =>
							setForm({ ...form, fieldOfJob: e.target.value })
						}
					>
						<option value="Technology - Engineer ( Full Tech Stack)">
							Technology - Engineer ( Full Tech Stack)
						</option>
						<option value="Technology - Front End Engineer ( Web)">
							Technology - Front End Engineer ( Web)
						</option>
						<option value="Technology - Front End Engineer ( Android)">
							Technology - Front End Engineer ( Android)
						</option>
						<option value="Technology - Front End Engineer ( IOS)">
							Technology - Front End Engineer ( IOS)
						</option>
						<option value="Technology - Backend Engineer">
							Technology - Backend Engineer
						</option>
						<option value="Data Engineer">Data Engineer</option>
						<option value="System Engineer">System Engineer</option>
						<option value="Site Reliability Engineer">
							Site Reliability Engineer
						</option>
						<option value="Corporate Sales">Corporate Sales</option>
						<option value="Marketing">Marketing</option>
						<option value="HR and Legal">HR and Legal</option>
						<option value="Salesforce Developer">
							Salesforce Developer
						</option>
						<option value="Salesforce Administrator">
							Salesforce Administrator
						</option>
						<option value="Software Development - Test">
							Software Development - Test
						</option>
						<option value="Quality Analyst">Quality Analyst</option>
						<option value="Finance and Risk Management">
							Finance and Risk Management
						</option>
						<option value="Accounting & Reconciliation">
							Accounting & Reconciliation
						</option>
						<option value="Product and Strategy">
							Product and Strategy
						</option>
						<option value="Operations and Supply Chain">
							Operations and Supply Chain
						</option>
						<option value="Customer Success ( Customer Care)">
							Customer Success ( Customer Care)
						</option>
						<option value="Teacher/Coach ( Educator)">
							Teacher/Coach ( Educator)
						</option>
						<option value="Security / Quality Management">
							Security / Quality Management
						</option>
						<option value="Project Management">
							Project Management
						</option>
						<option value="Growth Hacker">Growth Hacker</option>
						<option value="Media Personnel/ Presenter/ Radio Artist">
							Media Personnel/ Presenter/ Radio Artist
						</option>
						<option value="Movie/Photo Editing/ Post Production">
							Movie/Photo Editing/ Post Production
						</option>
						<option value="R&D / New Product Development">
							R&D / New Product Development
						</option>
						<option value="Payroll Specialist">
							Payroll Specialist
						</option>
					</select>
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
						placeholder="e.g Java, C++, etc"
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

					<select
						className="form__sInput"
						value={form.joiningDate}
						onChange={(e) =>
							setForm({ ...form, joiningDate: e.target.value })
						}
					>
						<option value="">Select an option</option>
						<option value="Immediately">Immediately</option>
						<option value="1-7 Days">1-7 Days</option>
						<option value="15-30 Days">15-30 Days</option>
						<option value="1 Month+">1 Month+</option>
					</select>
				</div>
				<div className="form__field">
					<Typography
						variant={mobileScreen ? "h6" : "h5"}
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Achievements
					</Typography>

					<textarea
						type="text"
						placeholder="Enter your achievements"
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
