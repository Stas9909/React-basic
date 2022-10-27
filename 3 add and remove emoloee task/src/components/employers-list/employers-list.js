import EmployersListItem from "../employers-list-item/employers-list-item";

import "./employers-list.css";

// const EmployersList=() =>{
//     return(
//         <ul className="app-list list-group">
//             <EmployersListItem name="John C." salary={800}/>
//             <EmployersListItem name="Alex M." salary={3000}/>
//             <EmployersListItem name="Carl .W" salary={5000}/>
//         </ul>
//     )
// }

const EmployersList = ({data, onDelete}) => {//массив объектов

    const elements = data.map(item => {//рез-тат MAP явл новый [] сформ из callback
//Здесь мы достаем св-во id из объекта item, а оставш св-ва объедин в св-во itemProps
        const {id, ...itemProps}=item;

        return(
            // <EmployersListItem name={item.name} salary={item.salary}/>
            <EmployersListItem 
                key={id} {...itemProps}//Разврнутый объект. То же самое выше
                onDelete={() => onDelete(id)}/>//передали функцию по удалению сотрудников в EmployersListItem
        )
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}


export default EmployersList;