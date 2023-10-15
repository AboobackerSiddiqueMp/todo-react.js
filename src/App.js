import './App.css'

import { useState } from 'react';
function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e) => { setTodo(e.target.value) }} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...todos, { id: Date.now(), text: todo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {todos.map((obj) => {
          return (
            <div className={`todo ${obj.status ? 'completed' : ''}`}>

              <div className="todo">
                <div className="left">
                  <input onChange={(e) => {
                    console.log(e.target.checked)
                    console.log(obj)
                    setTodos(todos.filter(obj2 => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked
                      }
                      return obj2
                    }))

                  }} value={obj.status} type="checkbox" name="" id="" />
                  {

                    <p>{obj.text}</p>
                  }
                </div>
                <div className="right">
                  <i className="fas fa-times" onClick={() => deleteItem(obj.id)}></i>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>



  );
  function deleteItem(id) {
    const newTodo = todos.filter(item => item.id !== id);
    setTodos(newTodo);
  }

}

export default App;
