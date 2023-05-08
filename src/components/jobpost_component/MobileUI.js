import React, { useMemo, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SearchIcon from '@mui/icons-material/Search';


const MobileJobUI = ({ DATA }) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [filterInput, setFilterInput] = useState('');
    const [filterColumn, setFilterColumn] = useState('');

    const filterRows = useMemo(() => {
        // console.log(filterColumn, filterInput);
        if (filterColumn === '')
            return DATA
        const s = DATA.filter(row => {
            return row[filterColumn]?.toLowerCase().includes(filterInput?.toLowerCase());
        })
        return s.sort((a, b) => new Date(b.postingDate) - new Date(a.postingDate));

    }, [filterColumn, filterInput, DATA])
    return (
        <>
            <div className='filterJobBar d-flex d-lg-block flex-wrap flex-column ' >
                <div className='IconInputWrap'>
                    <SearchIcon sx={{ position: 'absolute', left: "0.5rem" }} />
                    <input type="text" id="filterInput" value={filterInput} onChange={e => {
                        return (setFilterInput(e.target.value))
                    }} />
                </div>
                <select value={filterColumn} onChange={e => setFilterColumn(e.target.value)}>
                    <option value="">Select Filter</option>
                    <option value="companyName">Company Name</option>
                    <option value="role">Role</option>
                    <option value="jobType">Job Type</option>
                </select>
            </div>
            {filterRows &&
                filterRows.map((job, index) => {
                    return (<Accordion
                        key={job.companyName}
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                        sx={{
                            borderRadius: '0.61rem !important',
                            ".MuiSvgIcon-root": {
                                color: 'white'
                            }
                        }}
                    >
                        <AccordionSummary
                            sx={{ border: "none", borderRadius: '0.61rem !important', marginTop: "1rem", background: '#115798', }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography
                                sx={{
                                    width: '50%',
                                    textAlign: "center",
                                    flexShrink: 0,
                                    fontFamily: 'Lato',
                                    fontSize: "1.1rem",
                                    fontWeight: '700',
                                    color: 'white',
                                    textTransform: "capitalize"
                                }}
                            >
                                {job.companyName}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1.1rem",
                                    width: "50%",
                                    textAlign: "center",
                                    flexShrink: 0,
                                    textTransform: "capitalize",
                                    fontFamily: 'Lato',
                                    fontWeight: '700',
                                    color: 'white',
                                }}
                            >
                                {job.role}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: "0 !important" }}>
                            <table style={{ width: "100%", lineHeight: "2rem" }}>
                                <tbody>
                                    <tr style={{ background: "rgba(217, 217, 217, 0.41)", }}>
                                        <th style={{ padding: '0.61rem 0.81rem' }}>Job Type</th>
                                        <td style={{ padding: '0.61rem 0.81rem', }}>
                                            <div style={{ background: job.jobType === "Internship" ? "#ffc107" : job.jobType === "Part Time" ? "#3f51b5" : job.jobType === "Full Time" ? "#357a38" : "#fff", width: "fit-content", padding: "0.1rem 0.62rem", borderRadius: "0.8rem", color: "white", fontWeight: "700", textTransform: "capitalize" }}>
                                                {job.jobType}
                                            </div></td>
                                    </tr>
                                    <tr>
                                        <th style={{ padding: '0.61rem 0.81rem' }}>Batch</th>
                                        <td style={{ padding: '0.61rem 0.81rem' }}>{job.batch.join(", ")}</td>
                                    </tr>
                                    <tr style={{ background: "rgba(217, 217, 217, 0.41)", }}>
                                        <th style={{ padding: '0.61rem 0.81rem' }}>Date of Posting</th>
                                        <td style={{ padding: '0.61rem 0.81rem' }}>{job.postingDate ?
                                            job.postingDate : "NA"}</td>
                                    </tr>
                                    <tr >
                                        <th style={{ padding: '0.61rem 0.81rem' }}>Apply Link</th>
                                        <td style={{ display: 'table-cell' }}>
                                            <a href={job.applyLink} target="_blank" style={{ textDecoration: "none", color: "white", background: "#21C376", padding: "0.5rem 0.9rem", borderRadius: "0.9rem" }}>
                                                Apply
                                                <ArrowOutwardIcon sx={{ marginLeft: "7px", fontSize: "12px" }} />
                                            </a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </AccordionDetails>
                    </Accordion >);
                })}

        </>
    );
};

export default MobileJobUI;
