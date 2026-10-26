import { useState } from 'react'
import { Button } from './components/Button'
import { InputField } from './components/InputField'
import { Table } from './components/Table'

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
      <InputField testId={"todo-input"} value={todo} onChange={handleInputTyping}/>
      <Button testId={"todo-add"} label="Add todo" onClick={handleButtonClick}/>
      <Table todoList={todoList} onDone={handleDoneClick} onDelete={handleDelete}/>
    </>
  )
}

export default App
