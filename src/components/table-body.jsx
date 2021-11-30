import React from 'react'
import Rating from './rating'

const TableBody = (props) => {
    const { songList, handleDelete, selectedGenre, selectedGenreList } = props
    console.log('Selected genre: ', selectedGenre)
    let list
    if (!selectedGenre) {
        list = songList
    } else if (selectedGenre) {
        list = selectedGenreList
    }

    return (
        <tbody className='col'>
            {list.map(song => {
                let index = songList.indexOf(song)
                let id = song.id
                return (
                    <tr key={song.id}>
                        <th scope='row'>{index + 1}</th>
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