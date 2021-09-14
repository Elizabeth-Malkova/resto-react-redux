const initialState = {
    menu: []
};
//свойство тайп обьекта акшен говорит о том какое действие пришло
const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'MENU_LOADED':
            return{
                menu: action.payload
            };
            default:
                return state;
    }
}
export default reducer;