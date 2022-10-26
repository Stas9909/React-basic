import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

import "./app.css";

function App() {

    const data = [//массив данных, кот приходит с сервера
//increase - класс, кот меняет цвет эл-та, если true
//id уник идентиф, кот говорит ДОМ дереву, что эл-т тот же и не надо все перерисовывать
        {name: "John C.", salary: 800, increase: false, id: 1},
        {name: "Alex M.", salary: 3000, increase: true, id: 2},
        {name: "Carl W.", salary: 6000, increase: false, id: 3}
    ];

    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
{/*data - массив данных*/}
            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;