import React from 'react';
import TableHeader from './table-header'
import TableBody from './table-body'

const Table = props => {
const { tableHeader, songList, handleDelete, selectedGenre, selectedGenreList } = props

    return ( 
        <table className='container-fluid table'>
            <TableHeader
                tableHeader={tableHeader}
            />
            <TableBody 
                songList={songList}
                handleDelete={handleDelete}
                selectedGenre={selectedGenre}
                selectedGenreList={selectedGenreList}
            />
        </table>
     );
}
 
export default Table;