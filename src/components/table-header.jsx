import React from 'react';


const TableHeader = (props) => {
    const { tableHeader } = props

    return ( 
        <thead>
            <tr >
                <th/>
                <th scope='col'>{tableHeader.title}</th>
                <th scope='col'>{tableHeader.artist}</th>
                <th scope='col'>{tableHeader.genre}</th>
                <th scope='col'>{tableHeader.rating}</th>
            </tr>
        </thead>

    );
}
 
export default TableHeader;