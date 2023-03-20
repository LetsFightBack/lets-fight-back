import { useState, useEffect } from "react";
import { analytics, getHRDetail, saveDataToDB } from "../../utils/firebase/firebase.utils";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import { logEvent } from "firebase/analytics";


export default function Dashboard() {
    const WELCOME_MESSAGE = "Welcome to the Let's Fight Back Initiative!";

    const SENT_FOR_VERIFICATION_MESSAGE = "Sit back and relax, your details have been sent for verification!";

    const VERIFIED_MESSAGE = "Congratulations, you're now officially verified and ready to dive into the ocean of excellent profiles waiting for you!";

    const [userDetail, setUserDetail] = useState({});

    const [errors, setErrors] = useState({});
    // const [editClicked, setEditClicked] = useState(true);
    const [editClicked, setEditClicked] = useState(setEditClickedStatus(userDetail));
    const [verificationStatus, setVerificationStatus] = useState("NotVerified");

    useEffect(() => {
        getHRDetail().then(event => {
            setUserDetail(event);
        });
      }, []);

    useEffect(() => {
        // setEditClicked(setEditClickedStatus(userDetail));
        setVerificationStatus(userDetail.verificationStatus);
    }, [userDetail]);

    const validateForm = () => {
        let errors = {};
        let isValid = true;
    
        if (userDetail.name == null) {
          errors.name = 'Name is required';
          isValid = false;
        }

        if (userDetail.company == null) {
            errors.company = 'Company name is required';
            isValid = false;
          }
    
        if (userDetail.linkedInId == null) {
          errors.linkedInId = 'LinkedIn Id is required';
          isValid = false;
        }
        setErrors(errors);
        return isValid;
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // handle form submission
            // setUserDetail({...userDetail, ["VerificationStatus"]: "Recieved"});
            console.log("Submitting this info to firebase DB for HR");
            setEditClicked(false);
            setVerificationStatus("Recieved");
            // saving data to firestore DB
            saveDataToDB(userDetail);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserDetail({ ...userDetail, [name]: value });
    };
    logEvent(analytics, "Dashboard Page Loaded");
    return (
    <Container>
        <br/>
        <h2  style={{textAlign: "center"}}>{WELCOME_MESSAGE}</h2>
        <br/>
        <br/>
        { verificationStatus == "Recieved" && <Alert key="success" variant="success" style={{textAlign: "center", width:"80%", margin:"auto"}}>
          {SENT_FOR_VERIFICATION_MESSAGE}
        </Alert> }
        { verificationStatus == "Verified" && <Alert key="success" variant="success" style={{textAlign: "center", width:"80%", margin:"auto"}}>
          {VERIFIED_MESSAGE}
        </Alert> }
        <br/>
        <br/>
        <h4 style={{textAlign: "center"}}>User Details</h4>
        <Container className="w-75">
            <Form onSubmit={handleSubmit}>
            <Form.Group >
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type="text" 
                name="name" 
                value={userDetail.name} 
                disabled={ getFormStatusFromVerificationStatus(verificationStatus) }
                onChange={handleChange} 
                isInvalid={!!errors.name} />
                <Form.Control.Feedback type="invalid">
                    {errors.name}
                </Form.Control.Feedback>
            </Form.Group>
            <br/ >
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"
                 name="email" 
                 value={userDetail.email} 
                 disabled />
            </Form.Group>
            <br/ >
            <Form.Group>
                <Form.Label>Company</Form.Label>
                <Form.Control  
                type="text"  
                name="company" 
                value={userDetail.company} 
                disabled={ getFormStatusFromVerificationStatus(verificationStatus) }
                onChange={handleChange} 
                isInvalid={!!errors.company} />
                <Form.Control.Feedback type="invalid">
                    {errors.company}
                </Form.Control.Feedback>
            </Form.Group>
            <br/ >
            <Form.Group>
                <Form.Label>LinkedIn Id</Form.Label>
                <Form.Control 
                type="text" 
                name="linkedInId" 
                value={userDetail.linkedInId} 
                disabled={ getFormStatusFromVerificationStatus(verificationStatus) } 
                onChange={handleChange} 
                isInvalid={!!errors.linkedInId} />
                <Form.Control.Feedback type="invalid">
                    {errors.linkedInId}
                </Form.Control.Feedback>
            </Form.Group>
            <br/ >
            {Object.keys(errors).length > 0 && (
                <Alert variant="danger">Please correct the errors above.</Alert>
            )}
            { !getFormStatusFromVerificationStatus(verificationStatus) && <Button variant="primary" type="submit">
                Send Details for Verification
            </Button>}
            </Form>
        </Container>
    </Container>
    );
}

function setEditClickedStatus(userDetails) {
    if (userDetails.name == null || userDetails.company == null || userDetails.linkedInId == null) {
        return true;
    } else {
        return false;
    }

}

function getFormStatusFromVerificationStatus(verificationStatus) {
    if(verificationStatus == "NotVerified") {
        return false;
    } else {
        return true;
    }
}