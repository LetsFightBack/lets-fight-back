
export const COLUMNS = [
    {
        Header: 'Company Name',
        id: 1,
        accessor: 'company_name', // accessor is the "key" in the data
        style: {
            width: "12rem",
            padding: '10px',
            textAlign: "center",
            textTransform: "capitalize",
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
                margin: "auto",
                width:"8rem",
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
            fontWeight: "400", textAlign: "center",
            // borderRight: 'solid 1px #CCCCCC',
            margin: 5,
            display: 'block',
            cursor: 'pointer'
        },
    },
    {
        Header: 'Location',
        id: 8,
        accessor: 'location',
        style: {
            width: "12rem",
            padding: '10px',
            textAlign: "center",
            textTransform: "capitalize",
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
            margin: "auto",
            width:"6rem",
            display: 'block',
            cursor: 'pointer',
        },
        accessor: 'apply'
    }
]


