import "./search-panel.css"

const SearchPanel =() => {
    return (
        <input type="text"
        className="form-control search-input"//form-control и search-input - встроенные классы из bootstrap
        placeholder="Найти сотрудника"/>
    )
}

export default SearchPanel;