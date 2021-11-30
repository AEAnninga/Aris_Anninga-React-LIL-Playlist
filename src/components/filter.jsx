import React from 'react'

const Filter = (props) => {
    const { genres, handleGenres, ratings, handleRating } = props

    return ( 
        <section>
            <label className='m-2'>Filter:</label>
            <select className='m-5' name='genres' onChange={handleGenres}>
                <option value=""> --Please choose genre--</option>
                {genres.map(genre => <option key={genre.id} value={genre.name}>{genre.name}</option>)}
            </select>
            <select name='rating' onChange={handleRating}>
                <option value=""> --Please choose rating--</option>
                {ratings.map(rating => <option key={rating.id} value={rating.name}>{rating.stars}</option>)}
            </select>
        </section>
    );
}
 
export default Filter;