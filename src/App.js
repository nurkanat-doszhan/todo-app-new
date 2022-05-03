import './App.css';
import {useState} from "react";

const App = () => {
  const [l, setL] = useState('')
  const [tasks, setTasks] = useState([
    { text: 'Hit the gym', completed: false },
    { text: 'Buy eggs', completed: false },
    { text: 'Read a book', completed: true }
  ]);

  const inputChange = (e) => {
      setL(e.target.value)
  }

  const InputGroup = () => {
    return (
      <div className="input-group mb-3 mx-auto">
        <input type="text"
            value={l}
            onChange={ inputChange }
            className="form-control"
            placeholder="text" />
        <div className="input-group-append">
          <button type="button"
            onClick={ addNewTask }
            className="btn btn-outline-light">Button</button>
        </div>
      </div>
    )
  }

  const addNewTask = () => {
      alert(l)
    // setTasks([...tasks, {text: newTask, completed: false}])
  }

  /****** Компонент Task ******/
  const Li = (props) => {
    return (
        <li
            className="list-group-item"
            onClick={ () => props.taskClick() }
            style={{textDecoration: props.completed && 'line-through'}}>
          <input type="checkbox"
            defaultChecked={props.completed}
          />
          { props.text }
        </li>
    )
  }

  const taskClickHandler = (i) => {
    i.completed = !i.completed
    setTasks([...tasks])
  }

  return (
    <div className="App">
      <div className="container text-center">
        <h1>My To Do List</h1>
        <InputGroup />
        <ul className="list-group">
          {
            tasks.map((i, v) => {
              return (
                <Li key={v}
                    text={i.text}
                    completed={i.completed}
                    taskClick={() => taskClickHandler(i)}
                />
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;