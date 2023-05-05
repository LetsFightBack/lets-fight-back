

const defaultStyle = {
    padding: '10px',
    textAlign: "center",
    // borderRight: 'solid 1px #CCCCCC  ',
    background: '#fff',
    color: "#000",
    fontWeight: "300"
}
export const COLUMNS = [
    {
        Header: 'Company Name',
        id: 1,
        accessor: 'company_name', // accessor is the "key" in the data
        style: defaultStyle
    },
    {
        Header: 'Role',
        id: 2,
        accessor: 'role',
        style: defaultStyle

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
                backgroundColor = '#8c61cb';
            } else if (value === 'Part Time') {
                backgroundColor = '#de666f';
            } else if (value === 'Full Time') {
                backgroundColor = '#6188cb';
            }
            return <div style={{
                backgroundColor, color: "white",
                padding: "4px", borderRadius: "49px", fontSize: "15px",
                fontWeight: "300", textAlign: "center",
                // borderRight: 'solid 1px #CCCCCC',
                margin: 5,
                display: 'block',
                cursor: 'pointer'
            }}>{value}</div>;
        },

    },
    {
        Header: "Year of Experience",
        id: 4,
        accessor: "year_of_experience",
        style: defaultStyle

    },
    {
        Header: 'Batch',
        id: 5,
        accessor: 'batch',
        style: {
            backgroundColor: "#407BFF", color: "white",
            padding: "4px", borderRadius: "49px", fontSize: "15px",
            fontWeight: "300", textAlign: "center",
            // borderRight: 'solid 1px #CCCCCC',
            margin: 5,
            display: 'block',
            cursor: 'pointer'
        },
    },
    {
        Header: 'Date of Posting',
        id: 6,
        accessor: 'date_of_posting',
        style: defaultStyle

    },
    {
        Header: 'Apply',
        id: 7,
        style: {
            backgroundColor: "#21C376", color: "white",
            padding: "4px", borderRadius: "49px", fontSize: "15px",
            fontWeight: "300", textAlign: "center",
            // borderRight: 'solid 1px #CCCCCC  ',
            margin: 5,
            display: 'block',
            cursor: 'pointer'
        },
        accessor: 'apply'
    }
]


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

]