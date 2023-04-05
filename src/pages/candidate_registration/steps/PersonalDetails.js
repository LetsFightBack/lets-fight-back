import { TextField, Typography, useMediaQuery } from "@mui/material";
import "./form.style.scss";

export default function PersonalDetails({ form, setForm }) {
	const mobileScreen = useMediaQuery("(max-width:530px)");

	return (
		<div className="form">
			{mobileScreen && (
				<div className="form__titleHolder">
					<h1 className="form__title">Personal Details</h1>
				</div>
			)}

			<div className="form__leftFields">
				<div className="form__field">
					<Typography
						variant={mobileScreen ? "h6" : "h5"}
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						First Name *
					</Typography>
					<input
						type="text"
						placeholder="Enter your first name"
						value={form.firstName}
						required
						className="form__input"
						onChange={(e) =>
							setForm({ ...form, firstName: e.target.value })
						}
					/>
				</div>
				<div className="form__field">
					<Typography
						variant={mobileScreen ? "h6" : "h5"}
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Middle Name
					</Typography>
					<input
						type="text"
						placeholder="Enter your middle name"
						className="form__input"
						value={form.middleName}
						onChange={(e) =>
							setForm({ ...form, middleName: e.target.value })
						}
					/>
				</div>
				<div className="form__field">
					<Typography
						variant={mobileScreen ? "h6" : "h5"}
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Last Name
					</Typography>
					<input
						type="text"
						placeholder="Enter your last name"
						className="form__input"
						value={form.lastName}
						onChange={(e) =>
							setForm({ ...form, lastName: e.target.value })
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
						Email
					</Typography>
					<input
						type="text"
						placeholder="Enter your email"
						className="form__input"
						value={form.email}
						onChange={(e) =>
							setForm({ ...form, email: e.target.value })
						}
					/>
				</div>
				<div className="form__field">
					<Typography
						variant={mobileScreen ? "h6" : "h5"}
						component="div"
						sx={{ flexGrow: 1, my: "8px", fontWeight: "500" }}
					>
						Mobile Number
					</Typography>
					<input
						type="text"
						placeholder="Enter your mobile number"
						className="form__input"
						value={form.phone}
						onChange={(e) =>
							setForm({ ...form, phone: e.target.value })
						}
					/>
				</div>
			</div>
		</div>
	);
}
