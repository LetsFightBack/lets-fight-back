import { TextField, Typography } from "@mui/material";
import "./form.style.scss";

export default function EducationalDetails() {
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
					/>
				</div>
			</div>
		</div>
	);
}
