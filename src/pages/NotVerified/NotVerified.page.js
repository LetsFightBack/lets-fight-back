import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {
    getAuth,
    onAuthStateChanged
} from "firebase/auth";


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
        <div>Kindly verify your mail.
            <Link to="/login">
                <Button variant="text">login</Button>
            </Link>
        </div>
    );
}
