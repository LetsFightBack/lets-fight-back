import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {
    getAuth,
    onAuthStateChanged
} from "firebase/auth";
import { Container } from "react-bootstrap";


export async function IsEmailVerified() {
    try {
        var userData = null
        await new Promise((resolve, reject) =>
            onAuthStateChanged(getAuth(),
                user => {
                    if (user) {
                        // User is signed in.
                        resolve(user)
                        userData = user
                    } else {
                        // No user is signed in.
                        reject('no user logged in')
                    }
                },
                // Prevent console error
                error => reject(error)
            )
        )
        return (userData.emailVerified)
    } catch (error) {
        return false
    }
}

export default function PageNotVerified() {
    return (
        <Container>
            <br/>
            <br/>
            <br/>
            <h4 style={{textAlign: "center"}}>Please confirm your email address by checking for the verification email we sent you, and then proceed to <a href="/login">login</a>.</h4>
        </Container>
    );
}
