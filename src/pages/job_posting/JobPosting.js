import React from 'react'
import JobTable from '../../components/jobpost_component/JobTable'

const JobPosting = () => {
    return (
        <>
            <h3 style={{
                textAlign: 'center', margin: "2rem 0", fontSize: "2rem", fontWeight: "700", color: " #162141",
            }}>Let’s get you back up</h3>
            <div style={{
                maxWidth: "100%",
                margin: "3rem 2rem",
                minHeight: "80vh",
                borderRadius: "", borderRadius: "1rem",
                background: "#FFFFFF",
                boxShadow: "rgba(118, 118, 118, 0.25) 5px -3px 17px 12px"
            }}>
                <div className="row justify-content-center">
                    <div className='col-sm-11'>
                        <JobTable />
                    </div>
                </div>
            </div >
        </>
    )
}

export default JobPosting