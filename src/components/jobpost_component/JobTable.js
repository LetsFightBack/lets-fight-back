import React, { useEffect, useMemo, useState } from 'react'
import { useTable, useSortBy, useFilters } from 'react-table'
import './filter.style.scss'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { COLUMNS } from './data';
import SearchIcon from '@mui/icons-material/Search';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { getJobs } from "../../firebase";


const JobTables = () => {

    const [filterInput, setFilterInput] = useState('');
    const [filterColumn, setFilterColumn] = useState('');
    // const [DATA, setDATA] = useState([{
    //     "role": "Graduate Engineer Trainee ",
    //     "batch": [
    //         "2023",
    //         "2024",
    //         "2025"
    //     ],
    //     "applyLink": "https://bit.ly/41zWXls",
    //     "timestamp": {
    //         "seconds": 1683297353,
    //         "nanoseconds": 576000000
    //     },
    //     "jobType": "Internship",
    //     "location": "Gurgaon",
    //     "postingDate": "2023-05-05",
    //     "companyName": "Siemens Energy "
    // },
    // {
    //     "companyName": "Faurecia",
    //     "postingDate": "2023-05-06",
    //     "applyLink": "https://faurecia.eightfold.ai/careers/job/563087396050746?domain=faurecia.com",
    //     "role": "Analyst - PSP",
    //     "batch": [
    //         "2023"
    //     ],
    //     "location": "Pune",
    //     "timestamp": {
    //         "seconds": 1683311931,
    //         "nanoseconds": 585000000
    //     },
    //     "jobType": "Internship"
    // },
    // {
    //     "applyLink": "Associate Consultant",
    //     "role": "Associate Consultant",
    //     "postingDate": "2023-05-06",
    //     "companyName": " KPMG International",
    //     "timestamp": {
    //         "seconds": 1683397445,
    //         "nanoseconds": 478000000
    //     },
    //     "location": "Pune",
    //     "batch": [
    //         "2022",
    //         "2023",
    //         "2024",
    //         "2025"
    //     ],
    //     "jobType": "Full Time"
    // },
    // {
    //     "companyName": "Share Chat",
    //     "applyLink": "https://sharechat.mynexthire.com/employer/jobs?src=careers&p=eyJwYWdlVHlwZSI6ImpkIiwiY3ZTb3VyY2UiOiJjYXJlZXJzIiwicmVxSWQiOjE0ODAsInJlcXVlc3RlciI6eyJpZCI6IiIsImNvZGUiOiIiLCJuYW1lIjoiIn0sInBhZ2UiOiJjYXJlZXJzIiwiYnVmaWx0ZXIiOi0xLCJjdXN0b21GaWVsZHMiOnt9fQ==",
    //     "location": "Bangalore",
    //     "role": "Software Developer-1 (React Native)",
    //     "postingDate": "2023-05-05",
    //     "batch": [
    //         "2020",
    //         "2021",
    //         "2022"
    //     ],
    //     "jobType": "Full Time",
    //     "timestamp": {
    //         "seconds": 1683230147,
    //         "nanoseconds": 162000000
    //     }
    // }
    
    // ])
    const [DATA, setDATA] = useState([])
    const jobs = async () => {
        const s = await getJobs()
        setDATA(s.map((job) => {
            return {
                companyName: job?.companyName,
                role: job?.role,
                location: job?.location,
                jobType: job?.jobType,
                postingDate: job?.postingDate,
                batch: job?.batch,
                applyLink: job?.applyLink
            }
        }))
    }
    useEffect(() => {
        jobs();

    }, [])
    const columns = useMemo(() =>
        COLUMNS, [COLUMNS])
    const data = useMemo(() =>
        DATA, [DATA])

    const filterRows = useMemo(() => {
        // console.log(filterColumn, filterInput);
        if (filterColumn === '')
            return data
        return data.filter(row => {
            return row[filterColumn]?.toLowerCase().includes(filterInput?.toLowerCase());
        })

    }, [filterColumn, filterInput, data])
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = useTable({
        columns, data: filterRows,
        defaultColumn: { Filter: () => null },
        initialState: {
            sortBy: [
                {
                    id: 6, desc: true
                }
            ]
        },
    },
        useFilters,
        useSortBy
    )

    return (
        <>
            {
                <>
                    <div className='filterJobBar' >
                        <select value={filterColumn} onChange={e => setFilterColumn(e.target.value)}>
                            <option value="">Select Filter</option>
                            {COLUMNS.map(column => (
                                column.accessor !== 'year_of_experience' && column.accessor !== 'location' && column.accessor !== 'batch' && column.accessor !== 'applyLink' && column.accessor !== 'postingDate' &&
                                <option key={column.accessor} value={column.accessor}>
                                    {column.Header}
                                </option>
                            ))}
                        </select>
                        <div className='IconInputWrap'>
                            <SearchIcon sx={{ position: 'absolute', left: "0.5rem" }} />
                            <input type="text" id="filterInput" value={filterInput} onChange={e => {
                                return (setFilterInput(e.target.value))
                            }} />
                        </div>
                    </div>
                    <table {...getTableProps()} style={{ width: "100%", marginBottom: "2rem" }}>
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                            style={{
                                                cursor: "pointer",
                                                fontSize: "1rem",
                                                textAlign: "center",
                                                background: '#FFF',
                                                color: 'black',
                                                fontWeight: '400',
                                                fontFamily: "Lato",
                                                padding: '0.5rem 1.2rem'
                                            }}
                                        >
                                            {column.render('Header')}
                                            <span>{column.isSorted ? (column.isSortedDesc ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />) : ""}</span>
                                            <div>
                                                {column.canFilter ? column.render('Filter') : null}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()} >
                            {rows.map(row => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            if (cell.column.id === 7)
                                                return (
                                                    <td {...cell.getCellProps({ style: cell.column.style })}>
                                                        <a href={cell.value} target='_blank' style={{ textDecoration: "none", color: "white" }}>
                                                            {/* <button> */}
                                                            Apply
                                                            <ArrowOutwardIcon sx={{ marginLeft: "7px", fontSize: "12px" }} />
                                                            {/* </button> */}
                                                        </a>
                                                    </td>
                                                )
                                            console.log(cell.column);
                                            if (cell.column.id === 5)
                                                return (
                                                    <td {...cell.getCellProps({ style: cell.column.style })}>
                                                        {cell.value.join(', ')}
                                                    </td>
                                                )

                                            return (
                                                <td
                                                    {...cell.getCellProps({ style: cell.column.style })}

                                                // style={{
                                                //     padding: '10px',
                                                //     textAlign: "center",
                                                //     borderRight: 'solid 1px #CCCCCC  ',
                                                //     background: '#fff',
                                                //     color: "#000",
                                                //     fontWeight: "300"
                                                // }}
                                                >
                                                    {/* { cell.render('Cell')} */}
                                                    {cell.value === undefined || cell.value === "" || cell.value === null ? "NA" : cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </>}
        </>
    )
}

export default JobTables

