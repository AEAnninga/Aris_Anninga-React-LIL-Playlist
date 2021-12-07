import React from 'react';
import TableHeader from './table-header'
import TableBody from './table-body'

const Table = props => {
    const { 
        tableHeaders, 
        songList, 
        handleDelete,
        handleSort,
        renderSortIcon, 
        genreFilter, 
        genreList,
        ratingFilter,
        ratingList,
        doubleFilteredList 
    } = props

    return ( 
        <table className='container-fluid table bg-info rounded-3 text-white'>
            <TableHeader
                tableHeaders={tableHeaders}
                handleSort={handleSort}
                renderSortIcon={renderSortIcon}
            />
            <TableBody 
                songList={songList}
                handleDelete={handleDelete}
                genreFilter={genreFilter}
                genreList={genreList}
                ratingFilter={ratingFilter}
                ratingList={ratingList}
                doubleFilteredList={doubleFilteredList}
            />
        </table>
     );
}
 
export default Table;