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
export {
    menuLoaded,
    menuRequested,
    menuError,
    dishLoaded
};