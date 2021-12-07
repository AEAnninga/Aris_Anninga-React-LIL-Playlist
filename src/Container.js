import React from 'react'
import RouteNav from './routing/routeNav'
import PlayList from './components/PlayList'
import About from './components/about'
import { Route, Switch } from 'react-router-dom'

class Container extends React.Component {
    render() { 
        return (
            <div>
                <RouteNav />
                <Switch>
                    <Route exact={true} path='/' component={PlayList}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </div>
        
        );
    }
}
 
export default Container;