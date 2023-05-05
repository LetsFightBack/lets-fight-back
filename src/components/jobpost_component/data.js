import filterTypes from "./Filter"

export const COLUMNS = [
    {
        Header: 'Company Name',
        id: 1,
        accessor: 'company_name', // accessor is the "key" in the data
        Filter: filterTypes
    },
    {
        Header: 'Role',
        id: 2,
        accessor: 'role',
        // Filter: filterTypes

    },
    {
        Header: 'Job Type',
        accessor: 'job_type',
        id: 3,



    },
    {
        Header: "Year of Experience",
        id: 4,
        accessor: "year_of_experience",
    },
    {
        Header: 'Batch',
        id: 5,
        accessor: 'batch',
    },
    {
        Header: 'Date of Posting',
        id: 6,
        accessor: 'date_of_posting',
    },
    {
        Header: 'Apply',
        id: 7,
        accessor: 'apply'
    }
]


export const DATA = [
    {
        company_name: 'Hello',
        role: 'abc',
        job_type: "Part Time",
        batch: "2024",
        date_of_posting: "22-05-2024",
        apply: "Apply"
    },
    {
        company_name: 'Amazon',
        role: 'pqr',
        job_type: "Part Time",
        batch: "2024",
        date_of_posting: "20-02-2024",
        apply: "Apply"
    },
    {
        company_name: 'Microsoft',
        role: 'mnc',
        job_type: "Part Time",
        batch: "2024",
        date_of_posting: "16-01-2024",
        apply: "Apply"
    },
    {
        company_name: 'Google',
        role: 'kql',
        job_type: "Part Time",
        batch: "2024",
        date_of_posting: "1-12-2024",
        apply: "Apply"
    },

]