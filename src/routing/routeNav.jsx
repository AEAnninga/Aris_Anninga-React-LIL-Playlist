import React from 'react'
import { NavLink} from 'react-router-dom'

const RouteNav = () => {
    return (
        <nav >
            <ul className='routeNav'>
                <li className='routeNav-item'>
                    <NavLink exact={true} activeClassName='activePage' to="/">
                        <h3>Playlist</h3>
                    </NavLink>
                </li>
                <li className='routeNav-item'>
                    <NavLink activeClassName='activePage' to="/about">
                        <h3>About</h3>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
 
export default RouteNav;