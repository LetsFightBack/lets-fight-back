import React from 'react'
import JobTable from '../../components/jobpost_component/JobTable'

const JobPosting = () => {
    return (
        <div className='container '>
            <div className="row justify-content-center">
                <div className='col-sm-10'>
                    <JobTable />
                </div>
            </div>
        </div>
    )
}

export default JobPosting