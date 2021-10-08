import React from 'react';
import './menu-list-item.scss';
import {Link} from 'react-router-dom'

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, price, url, category, img, id} = menuItem;
    const link = `/dish/${id}`;
    return (
        
            <li className="menu__item">
                <Link to={link}>
                <div className="menu__title">{title}</div>
                <img className="menu__img" src = {url} alt={title}></img>
                
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                </Link>
                <button onClick={()=>onAddToCart()} className="menu__btn">Add to cart</button>
                <img className={`menu__img_${category}`}alt=''></img>
              
            </li>
           
    )
}

export default MenuListItem;