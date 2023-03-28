import { TextField, Typography } from "@mui/material";
import "./form.style.scss";

export default function LinksAndResume() {
	return (
		<div className="form">
			<div className="form__leftFields">
				<div className="form__field">
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Code Chef Handle
					</Typography>
					<TextField
						fullWidth
						id="filled-basic"
						placeholder="Enter your code chef handle"
						variant="filled"
					/>
				</div>
				<div className="form__field">
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Code Forces Handle
					</Typography>
					<TextField
						fullWidth
						id="filled-basic"
						placeholder="Enter your code forces handle"
						variant="filled"
					/>
				</div>
				<div className="form__field">
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						LinkdIn Profile
					</Typography>
					<TextField
						fullWidth
						id="filled-basic"
						placeholder="Enter your LinkedIn profile link"
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
						Leet Code Handle
					</Typography>
					<TextField
						fullWidth
						id="filled-basic"
						placeholder="Enter your leet code handle"
						variant="filled"
					/>
				</div>
				<div className="form__field">
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Github Profile
					</Typography>
					<TextField
						fullWidth
						id="filled-basic"
						placeholder="Enter your github profile link"
						variant="filled"
					/>
				</div>
				<div className="form__field">
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Resume
					</Typography>
					<TextField
						fullWidth
						id="filled-basic"
						placeholder="Enter your resume link"
						variant="filled"
					/>
				</div>
			</div>
		</div>
	);
}
