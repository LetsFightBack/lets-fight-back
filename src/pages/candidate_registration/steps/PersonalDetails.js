import { TextField, Typography } from "@mui/material";
import "./form.style.scss";

export default function PersonalDetails({form , setForm}) {
	return (
		<div className="form">
			<div className="form__leftFields">
				<div className="form__field">
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						First Name
					</Typography>
					<TextField
						fullWidth
						id="filled-basic"
						placeholder="Enter your first name"
						variant="filled"
                        value={form.firstName}
                        onChange={(e) => setForm({...form, firstName: e.target.value})}
					/>
				</div>
				<div className="form__field">
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Middle Name
					</Typography>
					<TextField
						fullWidth
						id="filled-basic"
						placeholder="Enter your middle name"
						variant="filled"
                        value={form.middleName}
                        onChange={(e) => setForm({...form, middleName: e.target.value})}
					/>
				</div>
				<div className="form__field">
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Last Name
					</Typography>
						<TextField
							fullWidth
							id="filled-basic"
							placeholder="Enter your last name"
							variant="filled"
                            value={form.lastName}
                            onChange={(e) => setForm({...form, lastName: e.target.value})}
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
						Email
					</Typography>
					<TextField
						fullWidth
						id="filled-basic"
						placeholder="Enter your email"
						variant="filled"
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
					/>
				</div>
				<div className="form__field">
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Mobile Number
					</Typography>
					<TextField
						fullWidth
						id="filled-basic"
						placeholder="Enter your mobile number"
						variant="filled"
                        value={form.phone}
                        onChange={(e) => setForm({...form, phone: e.target.value})}
					/>
				</div>
			</div>
		</div>
	);
}
