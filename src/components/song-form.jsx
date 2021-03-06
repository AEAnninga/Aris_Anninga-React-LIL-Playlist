import React from 'react';

const SongForm = props => {
    const { 
        handleChange, 
        handleSubmit, 
        genres 
    } = props
    
    return (
        <form id='form' className='navbar-form row' onSubmit={() => handleSubmit(event)}>
            
            <input required className='col rounded-3 m-2 fw-bold' type='text'  placeholder='title' onChange={() => handleChange('title')}></input>
            <input required className='col rounded-3 m-2 fw-bold' type='text'  placeholder='artist' onChange={() => handleChange('artist')}></input>
            <select required className='col rounded-3 m-2 fw-bold text-secondary' name='genres' id='genre-select' onChange={() => handleChange('genre')} >
                <option value="" className='fw-bold'>Choose Genre</option>
                {genres.map(genre => <option className='fw-bold' key={genre.id} value={genre.name}>{genre.name}</option>)}
            </select>
            <input required className='col rounded-3 m-2 fw-bold text-secondary' id='rating' type='number' min='0' max='5'  placeholder='rating' onChange={() => handleChange('rating')}></input>
            <button className='col rounded-3 btn btn-warning btn-sm m-2 text-white fw-bold' type='submit' >Add</button>
            
        </form>
    );
}
 
export default SongForm;