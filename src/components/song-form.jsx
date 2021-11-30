import React from 'react';

const SongForm = props => {
    const { handleChange, handleSubmit, genres } = props
    return ( 
        <nav>
            <form
            id='form'
            className='form-group row' 
            onSubmit={() => handleSubmit(event)}>
                <input required className='form col m-2' type='text'  placeholder='title' onChange={() => handleChange('title')}></input>
                <input required className='form col m-2' type='text'  placeholder='artist' onChange={() => handleChange('artist')}></input>
                <section>
                    <select required className='form col m-2' name='genres' id='genre-select' onChange={() => handleChange('genre')} >
                        <option value=""> --Please choose genre--</option>
                        {genres.map(genre => <option key={genre.id} value={genre.name}>{genre.name}</option>)}
                    </select>
                </section>
                <input required className='form col m-2 col' id='rating' type='number' min='0' max='5'  placeholder='rating' onChange={() => handleChange('rating')}></input>
                <button className='btn btn-primary btn-sm m-2' type='submit' >Add</button>
            </form>
        </nav>
     );
}
 
export default SongForm;