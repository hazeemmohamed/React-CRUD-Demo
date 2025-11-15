import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Table from './components/Table'

function App() {
  const initialFormData ={
    name:"",
    email: ""
  }

  const[FormData, setFormData]= useState(initialFormData);
  const[tableData, setTableData]=useState([])
  const [editIndex, setEditIndex]=useState(null)

  const handleFormData =(key, value) =>{
    setFormData ({...FormData,
      [key]:value
    })
  }
  const handleSubmit=(event)=>{
    event.preventDefault();

   if (editIndex === null){
     setTableData([
      ...tableData,
      {...FormData}
    ])

   
   }
   else{
    const updateData = [...tableData]
    updateData[editIndex] = {...FormData}
    setTableData(updateData)
    setEditIndex(null)
   }
    setFormData(initialFormData)
  }

  const handleEdit = (index)=>{
     
      setFormData(tableData[index])
       setEditIndex(index)
  }

  const handleDelete=(index)=>{
    const deletedData = [...tableData]
    deletedData.splice(index,1)
    setTableData(deletedData)
  }

  console.log(FormData)

  return (
    <div className='mx-auto max-w-2xl  p-6 border-gray-200'>
      <Form 
      handleFormData={handleFormData}
      handleSubmit={handleSubmit}
      FormData={FormData}
      editIndex = {editIndex}
      >

      </Form>
      <Table 
      tableData={tableData}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      ></Table>
    </div>
  )
}

export default App
