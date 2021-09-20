import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import './menu-list.scss';

class MenuList extends Component {

    render() {
        const {menuItems} = this.props;

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                    return <MenuListItem key = {menuItem.id} menuItem = {menuItem}/>
                    })
    
                }
            </ul>
        )
    }
};


export default connect() (MenuList);//эта функция нам позволяет нам четко связать этот компонент и редакс