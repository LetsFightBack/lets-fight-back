import "./403.style.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Page403() {
    return (
        <div>You are not logged in please
            <Link to="/login">
                <Button variant="text">login</Button>
            </Link>
        </div>
    );
}
