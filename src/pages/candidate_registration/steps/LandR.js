import { TextField, Typography } from "@mui/material";
import "./form.style.scss";

export default function LinksAndResume({form , setForm}) {
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
                        value={form.codeChefID}
                        onChange={(e) => setForm({...form, codeChefID: e.target.value})}
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
                        value={form.codeForcesID}
                        onChange={(e) => setForm({...form, codeForcesID: e.target.value})}
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
                        value={form.linkedIn}
                        onChange={(e) => setForm({...form, linkedIn: e.target.value})}
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
                        value={form.leetCodeID}
                        onChange={(e) => setForm({...form, leetCodeID: e.target.value})}
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
                        value={form.gitHub}
                        onChange={(e) => setForm({...form, gitHub: e.target.value})}
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
                        value={form.resume}
                        onChange={(e) => setForm({...form, resume: e.target.value})}
					/>
				</div>
			</div>
		</div>
	);
}
