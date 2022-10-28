import {Component} from "react";

import "./search-panel.css"

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state={
            term: "",
            filter: ""
        }
    }

    onUpdateSearch2=(e)=>{
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

    render(){
        return (
            <input type="text"
                    className="form-control search-input"//form-control и search-input - встроенные классы из bootstrap
                    placeholder="Найти сотрудника"
                    value={this.state.term}
                    onChange={this.onUpdateSearch2}/>
        )
    }   
}

export default SearchPanel;