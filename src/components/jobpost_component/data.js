import { getJobs } from "../../firebase";




export const COLUMNS = [
    {
        Header: 'Company Name',
        id: 1,
        accessor: 'company_name', // accessor is the "key" in the data
        style: {
            width: "12rem",
            padding: '10px',
            textAlign: "center",
            // borderRight: 'solid 1px #CCCCCC  ',
            background: '#fff',
            color: "#000",
            fontWeight: "300"
        },
    },
    {
        Header: 'Role',
        id: 2,
        accessor: 'role',
        style: {
            width: "12rem",
            padding: '10px',
            textAlign: "center",
            // borderRight: 'solid 1px #CCCCCC  ',
            background: '#fff',
            color: "#000",
            fontWeight: "300"
        },

    },

    {
        Header: 'Job Type',
        accessor: 'job_type',
        id: 3,
        // style: {
        //     backgroundColor: "#407BFF", color: "white",
        //     padding: "4px", borderRadius: "49px", fontSize: "15px",
        //     fontWeight: "300", textAlign: "center",
        //     // borderRight: 'solid 1px #CCCCCC',
        //     margin: 5,
        //     display: 'block',
        //     cursor: 'pointer'
        // },
        Cell: ({ cell: { value } }) => {
            let backgroundColor;
            if (value === 'Internship') {
                backgroundColor = '#ffc107';
            } else if (value === 'Part Time') {
                backgroundColor = '#3f51b5';
            } else if (value === 'Full Time') {
                backgroundColor = '#357a38';
            }
            // if (value === 'Internship') {
            //     backgroundColor = '#8c61cb';
            // } else if (value === 'Part Time') {
            //     backgroundColor = '#de666f';
            // } else if (value === 'Full Time') {
            //     backgroundColor = '#6188cb';
            // }
            return <div style={{
                backgroundColor, color: "white",
                fontFamily: "Lato",
                padding: "4px", borderRadius: "49px", fontSize: "15px",
                fontWeight: "700", textAlign: "center",
                textTransform: "uppercase",
                // borderRight: 'solid 1px #CCCCCC',
                margin: 5,
                display: 'block',
                cursor: 'pointer'
            }}>{value}</div>;
        },

    },

    {
        Header: 'Batch',
        id: 5,
        accessor: 'batch',
        style: {
            color: "black",
            padding: "4px", borderRadius: "49px", fontSize: "medium",
            fontWeight: "500", textAlign: "center",
            // borderRight: 'solid 1px #CCCCCC',
            margin: 5,
            display: 'block',
            cursor: 'pointer'
        },
    },
    {
        Header: 'Location',
        accessor: 'location',
        style: {
            width: "12rem",
            padding: '10px',
            textAlign: "center",
            // borderRight: 'solid 1px #CCCCCC  ',
            background: '#fff',
            color: "#000",
            fontWeight: "300"
        },

    },
    // {
    //     Header: "Year of Experience",
    //     id: 4,
    //     accessor: "year_of_experience",
    //     style: {
    //         width: "5rem",
    //         padding: '10px',
    //         textAlign: "center",
    //         // borderRight: 'solid 1px #CCCCCC  ',
    //         background: '#fff',
    //         color: "#000",
    //         fontWeight: "300"
    //     },


    // },
    {
        Header: 'Date of Posting',
        id: 6,
        accessor: 'date_of_posting',
        style: {
            width: "10rem",
            padding: '10px',
            textAlign: "center",
            // borderRight: 'solid 1px #CCCCCC  ',
            background: '#fff',
            color: "#000",
            fontWeight: "300"
        },

    },
    {
        Header: 'Apply',
        id: 7,
        style: {
            backgroundColor: "#21C376", color: "white",
            // width: "6rem",
            boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.25)",
            padding: "4px", borderRadius: "5px", fontSize: "15px",
            fontWeight: "300", textAlign: "center",
            // borderRight: 'solid 1px #CCCCCC  ',
            margin: 5,
            display: 'block',
            cursor: 'pointer'
        },
        accessor: 'apply'
    }
]

const jobs = async () => await getJobs();

export const DATA = [
    {
        company_name: 'Hello',
        role: 'Frontend ',
        job_type: "Part Time",
        batch: "2024",
        date_of_posting: "22-05-2024",
        apply: "Apply",
        year_of_experience: "6 years"
    },
    {
        company_name: 'Amazon',
        role: 'Backend',
        job_type: "Full Time",
        batch: "2024",
        year_of_experience: "6 years",
        date_of_posting: "20-02-2024",
        apply: "Apply"
    },
    {
        company_name: 'Microsoft',
        role: 'Full Stack',
        job_type: "Full Time",
        batch: "2024",
        year_of_experience: "6 years",
        date_of_posting: "16-01-2024",
        apply: "Apply"
    },
    {
        company_name: 'Google',
        role: 'Data Analyst',
        year_of_experience: "6 years",
        job_type: "Internship",
        batch: "2024",
        date_of_posting: "1-12-2024",
        apply: "Apply"
    },
    {
        company_name: 'Google',
        role: 'Data Analyst',
        year_of_experience: "6 years",
        job_type: "Internship",
        batch: "2024",
        date_of_posting: "1-12-2024",
        apply: "Apply"
    },
    {
        company_name: 'Google',
        role: 'Data Analyst',
        year_of_experience: "6 years",
        job_type: "Internship",
        batch: "2024",
        date_of_posting: "1-12-2024",
        apply: "Apply"
    },
    {
        company_name: 'Google',
        role: 'Data Analyst',
        year_of_experience: "6 years",
        job_type: "Internship",
        batch: "2024",
        date_of_posting: "1-12-2024",
        apply: "Apply"
    },



]
// console.log(typeof(jobs));
// const data = jobs.map((job) => {
//     return {
//         company_name: job?.company,
//         role: job?.role,
//         location: job?.location || "NA",
//         job_type: job?.jobType,
//         date_of_posting: job?.postingDate || "NA",
//         batch: job?.batch,
//         apply: job?.applyLink
//     }
// })
// console.log("data", data);