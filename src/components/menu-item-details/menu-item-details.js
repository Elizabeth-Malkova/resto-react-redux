import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuRequested, menuError, dishLoaded} from '../../actions';
import Spinner from '../spinner'; 
import Error from '../error';


class MenuItemDetails extends Component {
    componentDidMount(){
        console.log(this.props);
        const { dishId  }=this.props;
        this.props.menuRequested();
        const {RestoService} = this.props;
        RestoService.getMenuDish(dishId)
        .then(res => this.props.dishLoaded(res))
        .catch(()=>this.props.menuError());
    }

            render() {
                const {loading, error, dish} = this.props;
                if (loading) {
                    return <Spinner/>
                }
                if(error){
                    return <Error/>
                }
                if(!dish) return <div/>;
                const {title, price, url, category, img} = dish;
                return(
            <div>
                <li className="menu__item">              
                <div className="menu__title">{title}</div>
                <img className="menu__img" src = {url} alt={title}></img>               
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
               <button className="menu__btn">Add to cart</button>
                <img className={`menu__img_${category}`}alt=''></img>          
                </li>
            </div>
    
                 ) }
        };
        const mapStateToProps = (state) =>{
            return {
                loading: state.loading,
                error: state.error,
                dish: state.dish
            }
        };
        
        const mapDispatchToProps = {
            dishLoaded,
            menuRequested,
            menuError
        };
        
        export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(MenuItemDetails))

/*class MenuItemDetails extends Component {
    componentDidMount(){
        this.props.menuRequested();
        const {RestoService} = this.props;
        RestoService.getMenuItems()
        .then(res => this.props.menuLoaded(res))
        .catch(()=>this.props.menuError());
    }

    render() {
        const {menuItems, loading, error} = this.props;
        if (loading) {
            return <Spinner/>
        }
        if(error){
            return <Error/>
        }
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
const mapStateToProps = (state) =>{
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError
};


export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(MenuItemDetails))*/