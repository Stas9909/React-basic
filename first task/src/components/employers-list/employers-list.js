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

const EmployersList = ({data}) => {//массив объектов

    const elements = data.map(item => {//рез-тат MAP явл новый [] сформ из callback
        return(
            // <EmployersListItem name={item.name} salary={item.salary}/>
            <EmployersListItem {...item}/>//Разврнутый объект. То же самое выше
        )
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}


export default EmployersList;