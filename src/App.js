import './App.css';
import {useEffect, useState} from "react";

const App = () => {
    let completeStyle = {
        textDecoration: "line-through",
        backgroundColor: "#f3f3f3"
    };
    let [newTask, setNewTask] = useState('')
    let [task, setTask] = useState([
        {text: 'Test 1', complete: true},
        {text: 'Test 2', complete: true},
        {text: 'Test 3', complete: false}
    ]);
    // let addToLocalStorage = () => {
    //     return arr
    // }

    useEffect(() => {
        let data = localStorage.getItem('todos')
        // let arr = JSON.parse(data)
        let arr = JSON.parse(data)
        // setTask(arr)
        console.log(arr)

        return () => {
            return 0
        }
    }, [task])

    const itemHandler = (i) => {
        i.complete = !i.complete;
        setTask([...task]);
    };
    const Item = (props) => {
        return (
            <li
                className="list-group-item"
                style={props.complete ? completeStyle : null}
                onClick={props.itemClick}
            >
                {props.text}
            </li>
        );
    };
    const inputChange = (e) => {
        setNewTask(e.target.value)
    }
    const addClick = () => {
        if(newTask === '' || newTask === ' ') {
            return 0
        } else {
            setTask([...task, {text: newTask, complete: false}])
            setNewTask('')
            let data = JSON.stringify(task)
            let arr = JSON.parse(data)
            console.log(arr.length)

            localStorage.setItem('todos', data)
        }
    }

    return (
        <div className="App">
            <div className="container">
                <h1 className="pt-5 mb-3">Todo List</h1>
                <h3 className="mb-3">Add your tasks</h3>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your task"
                        onChange={inputChange}
                        value={newTask}
                        onKeyDown={(e) => {
                            if (e.code === "Enter") {
                                addClick()
                            }
                        }}
                    />
                    <button
                        className="btn btn-outline-light"
                        type="button"
                        id="button-addon2"
                        onClick={() => addClick()}
                    >
                        Button
                    </button>
                </div>

                <ul className="list-group mt-4">
                    {task.map((i, v) => {
                        return (
                            <Item
                                key={v}
                                text={i.text}
                                complete={i.complete}
                                itemClick={() => itemHandler(i)}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;