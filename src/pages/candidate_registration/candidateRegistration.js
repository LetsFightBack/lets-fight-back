import "./candidateRegister.style.scss";
import logo from "./logo192.png";

export default function CandidateRegistration(){
    return (
        <div className="register">
            <div className="register__container">
                <div className="register__titleholder">
                    <img
                        className="register__logo"
                        src={logo}
                    />
                    <h1 className="register__title">Candidate Registration</h1>
                </div>
                <div className="register__divider"></div>
            </div>
        </div>
    )
}