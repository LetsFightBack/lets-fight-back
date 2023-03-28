import { TextField, Typography } from "@mui/material";
import "./form.style.scss";

export default function EducationalDetails({form , setForm}) {
	return (
		<div className="form">
			<div className="form__leftFields">
				<div className="form__field">
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						College
					</Typography>
					<TextField
						fullWidth
						id="filled-basic"
						placeholder="Enter your college name"
						variant="filled"
                        value={form.college}
                        onChange={(e) => setForm({...form, college: e.target.value})}
					/>
				</div>
				<div className="form__field">
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Year of Passing
					</Typography>
					<TextField
						fullWidth
						id="filled-basic"
						placeholder="Enter your year of passing"
						variant="filled"
                        value={form.yearOfPassing}
                        onChange={(e) => setForm({...form, yearOfPassing: e.target.value})}
					/>
				</div>
				<div className="form__field">
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Backlogs
					</Typography>
					<TextField
						fullWidth
						id="filled-basic"
						placeholder="if not applicable, enter NIL"
						variant="filled"
                        value={form.backlogs}
                        onChange={(e) => setForm({...form, backlogs: e.target.value})}
					/>
				</div>
			</div>
			<div className="form__rightFields">
				<div className="form__field">
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Branch
					</Typography>
					<TextField
						fullWidth
						id="filled-basic"
						placeholder="Enter your branch"
						variant="filled"
                        value={form.branch}
                        onChange={(e) => setForm({...form, branch: e.target.value})}
					/>
				</div>
				<div className="form__field">
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						CGPA
					</Typography>
					<TextField
						fullWidth
						id="filled-basic"
						placeholder="Enter your CGPA"
						variant="filled"
                        value={form.CGPA}
                        onChange={(e) => setForm({...form, CGPA: e.target.value})}
					/>
				</div>
			</div>
		</div>
	);
}
