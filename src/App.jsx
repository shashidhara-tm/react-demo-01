import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState("") // String
  const [todoList, setTodoList] = useState([])

  const handleInputTyping = (e) => {
    // console.log(e)
    setTodo(e.target.value)
  }

  const handleButtonClick = () => {
    if (todo == "") {
      alert("Enter todo title!")
    } else {
      //Create copy of current list
      const oldList = [...todoList]
      oldList.push({
        id: Date.now(),
        title: todo,
        isCompleted: false
      }) //Push new item to old list
      setTodoList(oldList)
      setTodo("") //Clear textbox after adding todo to todolist
    }
  }

  const handleDoneClick = (itemId) => {
    // console.log(itemId);
    const newList = todoList.map((todoItem) => {
      let item = {...todoItem}
      if(todoItem.id == itemId){
        item.isCompleted = true
      }
      return item;
    })
    setTodoList(newList)
  }

  const handleDelete = (itemId) => {
    setTodoList(todoList.filter((item) => item.id != itemId))
  }

  return (
    <>
      <input type='text' value={todo} onChange={handleInputTyping} />
      <button style={{ marginLeft: 10 }} onClick={handleButtonClick}>Add todo</button>
      {/* <div> Current Todo: {todo} </div> */}
      {/* <div>All todos : {JSON.stringify(todoList)}</div> */}
      <br />
      <br />
      <table border={1}>
        <tbody>
        <tr>
          <th>Sl. No.</th>
          <th>Title</th>
          <th>Is Completed?</th>
          <th>Action</th>
        </tr>
        {todoList.map((item, index) => {
          return <tr key={item.id}>
            <td>{index+1}</td>
            <td>{item.title}</td>
            <td>
              {item.isCompleted ? "Yes" : "No"}
            </td>
            <td>
               {!item.isCompleted && <button onClick={() => handleDoneClick(item.id)}>Done</button>}
               <button onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        })}
        </tbody>
      </table>
    </>
  )
}

export default App
