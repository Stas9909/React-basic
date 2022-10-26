// import EmployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list-item.css";

const EmployersListItem = ({name, salary, increase}) => {

    let className="list-group-item d-flex justify-content-between";
    if(increase){
        className+=" increase";
    }

    return(
        // <li className="list-group-item d-flex justify-content-between">
        <li className={className}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                    className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
    )
}

export default EmployersListItem;