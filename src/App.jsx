import { useState , useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  },[])
  

  const saveToLS =(params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toogleFinished = (e) => {
    setshowFinished(!showFinished)
  }
  

  const handleEdit = (e, id) =>{
    let t = todos.filter(i=>i.id === id);
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos)
    saveToLS()
  }
  
  const handleDelete = (e, id) =>{
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos)
    saveToLS()
  }
  const handleSave = () => {
    setTodos([...todos,{id: uuidv4(),todo,isCompleted: false}])
    setTodo("")
    saveToLS()
  }

  const handleChange = (e) =>{
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item =>{
      return item.id === id
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLS()
  }
  

  return (
    <>
    <Navbar/>
      <div className="container w-full md:mx-auto mt-5 rounded-lg bg-slate-300 font-['Montserrat'] flex-col p-3">
        <div className='w-full flex items-center justify-center'>
          <h1 className='font-bold'>Master Your Tasks with Taskly</h1>
        </div>
        <div className='mb-5'>
          <h2 className='font-bold'>Add a Task</h2>
          <div className='flex gap-5'>
            <input type="text" className='rounded-md py-1 px-2 w-[90%]' onChange={handleChange} value={todo} />
            <button className='bg-slate-500 md:py-1 md:px-2 rounded-md font-semibold md:w-[10%] px-1 disabled:bg-slate-900 text-white' disabled={todo.length<=3} onClick={handleSave}>save</button>
          </div>
        </div>
        <hr className='border-2 border-slate-800 rounded-full' />
        <div className='flex flex-col gap-2'>
          <div className='flex gap-5 mt-2'>
          <input type="checkbox" checked={showFinished} onChange={toogleFinished} />Completed Tasks
          </div>
          <h1 className='font-bold mt-1'>Your Todos</h1>
          {todos.length === 0 && <div>No Task has been added..</div>}
          {todos.map(item=>{
            return (showFinished || !item.isCompleted) && <div key={item.id} className='flex justify-between todos'>
                      <input name={item.id} type="checkbox" checked={item.isCompleted} onChange={handleCheckbox} />
                      <p className={item.isCompleted?"line-through":""}>{item.todo}</p>
                      <div className='flex gap-5 font-bold'>
                        <button onClick={(e)=>{handleEdit(e, item.id)}} className='text-blue-800'><FiEdit /></button>
                        <button onClick={(e)=>{handleDelete(e, item.id)}} className='text-red-700'><MdOutlineDeleteOutline /></button>
                      </div>
                    </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
