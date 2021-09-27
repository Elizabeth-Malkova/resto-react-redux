import React from 'react';
import {MainPage, CartPage} from '../pages';
import MenuItemDetails from '../menu-item-details';
import AppHeader from '../app-header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Background from './food-bg.jpg';

const App = () => {
    return (
        
        <Router>
            <div className = "app" style={{background: `url(${Background}) center center/cover no-repeat`}}>    
            <AppHeader total={50}/>
            <Switch>
            {/* <Route path = '/dish/' exact component = {MainPage}/> */}
            <Route path ='/dish/:id' render={
                ({match})=>{
                    const {id} = match.params;
                    return <MenuItemDetails dishId={id}/>
                }
            }/>
            <Route path = '/cart' component = {CartPage}/>
            <Route path = '/' component = {MainPage}/>
            </Switch>
            </div>
        </Router>
    )
}

export default App; //эта функция вернет новый апп, отрендерит его и он уже будет обвернут в консьюмер

/*<AppHeader total={50}/>
<MainPage/>
<CartPage/>*/