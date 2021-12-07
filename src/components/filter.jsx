import React from 'react'

const Filter = (props) => {
    const { 
        genres, 
        handleGenres, 
        ratings, 
        handleRating 
    } = props

    return ( 
        <section>
            <label className='rounded m-2 text-white'>Filter:</label>
            <select className='rounded m-5 fw-bold text-secondary' name='genres' onChange={handleGenres}>
                <option className='fw-bold' value=""> --Filter on genre--</option>
                {genres.map(genre => <option className='fw-bold' key={genre.id} value={genre.name}>{genre.name}</option>)}
            </select>
            <select className='rounded fw-bold text-secondary' name='rating' onChange={handleRating}>
                <option className='fw-bold' value=""> --Filter on rating--</option>
                {ratings.map(rating => <option className='fw-bold' key={rating.id} value={rating.stars}>{rating.stars}</option>)}
            </select>
        </section>
    );
}
 
export default Filter;