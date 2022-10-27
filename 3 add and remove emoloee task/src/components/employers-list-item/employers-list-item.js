// import EmployersListItem from "../employers-list-item/employers-list-item";
import {Component} from "react"

import "./employers-list-item.css";

class EmployersListItem extends Component {
    constructor(props){
        super(props);
        this.state={
            increase: false,//изнач false, т.е без премии
            promotion: false
        }
    }
   
    onIncrease=()=>{
        //callback функц:где, чтобы не писать state.increase, вместо state сразу в аргументе проводим ДЕСТРУКТУРИЗАЦИЮ
        //({increase}) -аргумент оборач в () и внутри в {} вытаскиваем increase. Далее пропис стр функц и (), чтобы не
        //прописывать return. Внутри объекта устанавл новое св-во INCREaSE, кот будет ПРОТИВОПОЛОЖНЫМ аналог в констр
        //increase(новое св-во): !increase(старое из конструктора)
        this.setState(({increase}) =>({
            increase: !increase
        }))
    }

    worthyPromotion=()=>{
        this.setState(({promotion}) =>({
            promotion: !promotion
        }))
    }

    render(){
        const {name, salary, onDelete}=this.props;//вытягиваем св-ва из props!!!!!!!
        const {increase, promotion}=this.state;//вытягиваем св-во из state!!!!!!!

        let className="list-group-item d-flex justify-content-between";
        if(increase){
            className+=" increase";
        }
        if(promotion){
            className+=" like";
        }

        return(
            // <li className="list-group-item d-flex justify-content-between">
            <li className={className}>
                <span className="list-group-item-label"
                      onClick={this.worthyPromotion}>
                        {name}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
                <div className="d-flex justify-content-center align-items-center">
                   <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                   <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployersListItem;