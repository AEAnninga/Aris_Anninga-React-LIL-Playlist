import React from 'react';
import TableHeader from './table-header'
import TableBody from './table-body'

const Table = props => {
    const { 
        tableHeaders, 
        sortColumn, 
        songList, 
        handleDelete,
        handleSort,
        renderSortIcon, 
        genreFilter, 
        genreList,
        ratingFilter,
        ratingList,
        doubleFilter,
        doubleFilteredList 
    } = props

    return ( 
        <table className='container-fluid table bg-info rounded-3 text-white'>
            <TableHeader
                tableHeaders={tableHeaders}
                sortColumn={sortColumn}
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
                doubleFilter={doubleFilter}
                doubleFilteredList={doubleFilteredList}
                sortColumn={sortColumn}
            />
        </table>
     );
}
 
export default Table;