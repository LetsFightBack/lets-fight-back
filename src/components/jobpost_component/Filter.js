

const filterTypes = ({ column }) => {
    const { filterValue, setFilter } = column
    return (
        <span>Search:{' '}
            <input type="text" value={filterValue || ''} onChange={e => setFilter(e.target.value)} />
        </span>
    )
};

// const filterTypes = {
//     text: (rows, id, filterValue) => {
//         return rows.filter(row => {
//             const rowValue = row.values[id];
//             return rowValue !== undefined ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()) : true;
//         });
//     },
//     range: (rows, id, filterValue) => {
//         return rows.filter(row => {
//             const rowValue = row.values[id];
//             return rowValue !== undefined ? rowValue >= filterValue[0] && rowValue <= filterValue[1] : true;
//         });
//     },
// };

export default filterTypes;