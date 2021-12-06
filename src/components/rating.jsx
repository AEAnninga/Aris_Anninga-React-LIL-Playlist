import React from 'react'

const Rating = (props) => {
    const { song } = props
    let icon = []
    for (let i = 1; i <= song.rating; i++) {
        icon.push(<i className="fa fa-star" />)
    }
    return icon
}
 
export default Rating;