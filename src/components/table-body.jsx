import React from 'react'
import Rating from './rating'

const TableBody = props => {
    const { 
        songList, 
        handleDelete, 
        genreFilter,
        genreList, 
        ratingFilter,
        ratingList, 
        doubleFilteredList,
    } = props

    let list

    if (!genreFilter.selected && !ratingFilter.selected) {
        list = songList
    } else if (genreFilter.selected && !ratingFilter.selected) {
        list = genreList
    } else if (ratingFilter.selected && !genreFilter.selected) {
        list = ratingList
    } else if (genreFilter.selected && ratingFilter.selected) {
        list = doubleFilteredList
    }

    return (
        <tbody  className='col playlist'>
            {list.map(song => {
                let index = songList.indexOf(song)
                let id = song.id
                return (
                    <tr key={song.id} className='p-2'>
                        <th scope='col'>{index + 1}</th>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.genre}</td>
                        <td><Rating song={song}/></td>
                        <td>
                            <button 
                                className='badge bg-danger bg-pill'
                                onClick={() => handleDelete(id)}
                            >DELETE</button>
                        </td>
                    </tr>
                )
            })}   
        </tbody> 
    )
}

export default TableBody;