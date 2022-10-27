import {Component} from "react"

import "./employers-add-form.css";

class employersAddForm extends Component {
    constructor (props){
        super(props)
        this.state={
            name: "",
            salary: ""
        }
    }

    onValueChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value//При клике заменяем атрибут name на e.target.value и запис в state
        })
    }

    

    onAddEmploee=(e)=>{
        e.preventDefault();//Если не поставить e.preventDefault, то форма будет отправляться и изображние исчезать
        // if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);//извлекли name и salary из props????????
        this.setState({
            name: "",
            salary: ""
        })
        if(this.id){this.id++};
    }

    render(){
        const {name, salary}=this.state

        return(
            <div className="app-add-form">

                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex"
//onSubmit - стандартный обработчик событий для form для которого так же надо прописывать e.preventDefault() и 
//добавлять параметр (e) к вызванному методу, чтобы предотвр отправку формы (наши данные будут отправлены и не 
//будут задерживаться на экране), т.к. в реакте не работает false. Если не добавить (e), то undefined
                    onSubmit = {this.onAddEmploee}>
                    <input type="text" 
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"//Задаем атрибут к input NAME  со св-вом name
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number" 
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"//Задаем атрибут к input NAME со св-вом salary
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }    
}

export default employersAddForm