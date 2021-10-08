const menuLoaded = (newMenu) => {
    return{
        type: 'MENU_LOADED',
        payload: newMenu
    };
};
const menuRequested = () => {
    return{
        type: 'MENU_REQUESTED',
    };
};
const menuError = () => {
    return{
        type: 'MENU_ERROR',
    };
};
const dishLoaded = (newDish) => {
    return{
        type: 'DISH_LOADED',
        payload: newDish
    };
};
const addedToCart = (id) => {
    return{
        type: 'ITEM_ADD_TO_CART',
        payload: id,
    };
};
const deleteFromCart = (id) => {
    return{
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    };
};

export {
    menuLoaded,
    menuRequested,
    menuError,
    dishLoaded,
    addedToCart,
    deleteFromCart,
};