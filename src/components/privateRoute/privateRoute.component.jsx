import React from 'react';
import { useState, useEffect } from "react";
import Page403 from "./../../pages/403/403.page"
import Loader from "./../loader/loader.component"
import {
    getAuth,
    onAuthStateChanged
} from "firebase/auth";

const PrivateRoute = ({ component }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        IsLoggedIn().then((data) => {
            setUserData(data)
        })
        return () => { }
    }, []);

    console.log(`user auth: ${userData}`);

    if (userData == null) {
        return (<Loader></Loader>)
    }

    if (userData == false) {
        return (<Page403></Page403>);
    }
    return (<>
        {component}
    </>)
};

async function IsLoggedIn() {
    try {
        await new Promise((resolve, reject) =>
            onAuthStateChanged(getAuth(),
                user => {
                    if (user) {
                        // User is signed in.
                        resolve(user)
                    } else {
                        // No user is signed in.
                        reject('no user logged in')
                    }
                },
                // Prevent console error
                error => reject(error)
            )
        )
        return true
    } catch (error) {
        return false
    }
}

export default PrivateRoute;