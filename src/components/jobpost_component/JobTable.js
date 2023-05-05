import React, { useMemo, useState } from 'react'
import { useTable, useSortBy, useFilters } from 'react-table'
import filterTypes from './Filter';
// import { columns as col } from './Columns'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { COLUMNS, DATA } from './data';



const JobTables = () => {

    const [filterInput, setFilterInput] = useState('');
    const [filterColumn, setFilterColumn] = useState('');
    const columns = useMemo(() =>
        COLUMNS, [])
    const data = useMemo(() =>
        DATA, [])

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = useTable({
        columns, data, initialState: {
            sortBy: [
                {
                    id: 'date_of_posting ', desc: true
                }
            ]
        },
        defaultColumn: { Filter: () => null },
    },
        useFilters,
        useSortBy)

    // const filterRows = useMemo(() => 

    // , [filterColumn, filterInput])


    return (
        <>
            <div>
                <label htmlFor="filterInput">Filter:</label>
                <input type="text" id="filterInput" value={filterInput} onChange={e => setFilterInput(e.target.value)} />
                <select value={filterColumn} onChange={e => setFilterColumn(e.target.value)}>
                    <option value="">Select column</option>
                    {COLUMNS.map(column => (
                        <option key={column.accessor} value={column.accessor}>
                            {column.Header}
                        </option>
                    ))}
                </select>
            </div>
            <table {...getTableProps()} style={{ width: "100%" }}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    style={{

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
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding: '10px',
                                                textAlign: "center",
                                                borderRight: 'solid 1px #CCCCCC  ',
                                                background: '#fff',
                                                color: "#000",
                                                fontWeight: "300"
                                            }}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default JobTables

