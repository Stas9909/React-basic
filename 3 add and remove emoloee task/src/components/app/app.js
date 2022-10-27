import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

import "./app.css";

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            data: [//массив данных, кот приходит с сервера
                //increase - класс, кот меняет цвет эл-та, если true
                //id уник идентиф, кот говорит ДОМ дереву, что эл-т тот же и не надо все перерисовывать
                {name: "John C.", salary: 800, increase: false, id: 1},
                {name: "Alex M.", salary: 3000, increase: true, id: 2},
                {name: "Carl W.", salary: 6000, increase: false, id: 3}
            ]
        }
        this.id = 4;
    }

//Для начала мы должны найти индекс объекта, кот мы хотим удалить. Делается это с пом findIndex, где в elem запсиыв
//кажд объект массива и далее с пом функции мы сравниваем elem.id (id кажд эл-та в массиве)=== id (id из арг метода)
//Т.о. при сравении мы находим индекс эл-та(объекта), кот хотим удалить
//Т.к мы не можем изменять/удалять объекты напрямую из массива (будут баги), мы должны создать аналогичный массив,
//но уже без итересующего (удаленного) нас объекта
//Есть 2 способа:

//1) Создаем 2 массива. В первом (before) мы берем с 1 эл-та (инд 0) и до того эл-та, кот хотим удалить (index)
//Во второй массив мы берем следующий эл-та от того, кот хотим удалить (index +1)) и до последнего (по умолчанию)
//Т.о. получаем 2 массива, но уже без удаленного эл-та и далее создаем один большой массив [...before, ...after],
//внутри которого разворачваем 2 маленьких и в конце вместо data возвр наш новый массив (data: newArr) , т.е заменям
//старый массив объектов data на новый newArr
    deleteItem = (id) => {//Этот метод передаестя до самого нижнего уровня в onClick={onDelete}
        this.setState(({data})=>{
            // const index = data.findIndex(elem => elem.id === id);

            // const before = data.slice(0, index);
            // const after = data.slice(index +1);

            // const newArr = [...before, ...after];

            // return{
            //     data: newArr
            // }

//2 способ: берем массив data и фильтруем сформированием нового массива (filter)
//Опять же перебир кажд объект внутри массива(item) и если item.id не равен id, т.е остануться эл-ты id кот отличаются
            return{
                data: data.filter(item=>item.id !== id)
            }  
        })
    }
    //Создаем новый объект (пока пустой)
    //из state извлекаем массив data и СОЗДАЕМ НОВЫЙ МАССИВ в котором разворачиваем наш [] data и доб новый newItem
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.id++//
        }
        this.setState(({data}) =>{
            const newArr = [...data, newItem];
            return{
                data: newArr
            }  
        });
    }

    render() {
        return(
            <div className="app">
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
{/*data - массив данных*/}
                <EmployersList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployersAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;