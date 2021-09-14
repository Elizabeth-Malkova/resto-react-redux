import React from 'react';
import RestoServiceContext from '../resto-service-context';
//создаем компонент высшего порядка (т.е. это функция которая будет возвращать функцию,которая как аргумент будет возвращать компонент)
//мы создаем компонент высшего порядка,что бы туда поместить консьюмер и использовать 
//тот компонент для передачи данных по иэрархии

const WithRestoService = () => (Wrapped) => {
    return (props) =>{
        return (
            <RestoServiceContext.Consumer>{
                
                (RestoService) => {
                    return <Wrapped {...props} RestoService = {RestoService}/>
                }
            }
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;