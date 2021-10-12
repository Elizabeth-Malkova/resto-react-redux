const initialState = {
    menu: [],
    loading: true,
    error: true,
    items: [],
    dish: null,
    totalSum: 0,
};
//свойство тайп обьекта акшен говорит о том какое действие пришло
const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'MENU_LOADED':
            return{
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return{
                ...state,
                menu: state.menu,
                loading: true,
                error: false
            };
        case 'MENU_ERROR':
            return{
                ...state,
                menu: state.menu,
                loading: false,
                error: true
            };
        case 'DISH_LOADED':
            return{
                ...state,
                menu: state.menu,
                loading: false,
                error: false,
                dish: action.payload
            }
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const existenItem = state.items.findIndex(item =>item.id === id);
            if(existenItem === -1){
                const newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    counter: 1,
                }
            
                state.items.push(newItem)
            }else{
                state.items[existenItem].counter++;
            }

            const resalt = state.items.reduce((prevValue,currentValue)=>{
                return (prevValue+currentValue.price*currentValue.counter)  
            },0);

            return{
                ...state,
                items: [
                    ...state.items
                ],
                totalSum:resalt
            };
                    
        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
 
        const resultDel=(items)=>{
            const totalSum = items.reduce((prevValue,currentValue)=>{
                return (prevValue+currentValue.price*currentValue.counter)  
            },0);
            return totalSum
        };

        const items = [
            ...state.items.slice(0,itemIndex),
            ...state.items.slice(itemIndex+1),
        ]
        const totalSumDel=resultDel(items);
            return {
                ...state,
                items,
                totalSum:totalSumDel
            };

        default:
            return state;
    }
}
export default reducer;