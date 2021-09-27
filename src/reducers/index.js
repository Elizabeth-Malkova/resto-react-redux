const initialState = {
    menu: [],
    loading: true,
    error: true,
    dish: null
};
//свойство тайп обьекта акшен говорит о том какое действие пришло
const reducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type){
        case 'MENU_LOADED':
            return{
                menu: action.payload,
                loading: false
            };
            case 'MENU_REQUESTED':
            return{
                menu: state.menu,
                loading: true,
            };
            case 'MENU_ERROR':
            return{
                menu: state.menu,
                loading: false,
                error: true
            };
            case 'DISH_LOADED':
                return{
                    menu: state.menu,
                    loading: false,
                    error: false,
                    dish: action.payload
                }
        default:
            return state;
    }
}
export default reducer;