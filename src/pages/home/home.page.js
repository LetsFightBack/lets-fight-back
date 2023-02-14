import "./home.style.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/view">
        <Button variant="text">Table Page</Button>
      </Link>
    </div>
  );
}
