import React from 'react';

const TableHeader = props => {
    const { 
        tableHeaders,
        handleSort,
        renderSortIcon
    } = props
    
    return ( 
        <thead>
            <tr>
                <th/>
                {tableHeaders.map(column => (
                    <th style={{cursor:'pointer'}} key={column.path} onClick={() => handleSort(column.path)} scope='col'>
                        {column.label}
                        {renderSortIcon(column)}
                    </th>
                ))}
            </tr>
        </thead>
    );
}
 
export default TableHeader;