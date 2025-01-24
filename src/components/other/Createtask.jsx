import React, { useContext, useState } from 'react'
import { proper } from '../../context/Taskprovider'

const Createtask = () => {

        const [userdata , setuserdata] = useContext(proper)
        
    const [title, settitle] = useState('')
    const [date, setdate] = useState('')
    const [assignto, setassignto] = useState('')
    const [category, setcategory] = useState('')
    const [description, setdescription] = useState('')

    const [newtask, setnewtask] = useState({})

    const submit=(e)=>{
         
        e.preventDefault()
     
        setnewtask({title , description,category,date , active : false , new_task : true , completed_task : false , failed : false})
      
       
              const data = userdata
            
              data.forEach(function(e){
                   
                   if(assignto == e.name){
                      
                    e.tasks.push(newtask)
                    e.task_numbers.new_task = e.task_numbers.new_task+1 ;
                   }
              })
 
               setuserdata(data)
             
              
           
            setassignto('')
            settitle('')
            setdate('')
            setdescription('')
            setcategory('')
    }
  return (
   
    <div class="two">

    <form onSubmit={(e)=>{

        submit(e)

    }} className='flex items-start justify-between m-10 p-5 bg-gray-900 '>

        <div className=''>

            <div>
                <h1> Task Title </h1>
                <input value={title} onChange={(e)=>{
                      settitle(e.target.value);
                }} type="text" placeholder='Make a UI design ' className='p-1 rounded  bg-gray-900 border text-xs w-96 mt-1 ' id='one' />
            </div>


            <div className='mt-5 '>
                <h1 >Date</h1>
                <input value={date} onChange={(e)=>{
                      setdate(e.target.value);
                }} type="date" className='p-1 rounded  bg-gray-800 border text-xs w-96  mt-1  '  id='one'/>
            </div>

            <div className='mt-5'>
                <h1>Assign to</h1>
                <input value={assignto} onChange={(e)=>{
                      setassignto(e.target.value);
                }} type="text" className='p-1 rounded  bg-gray-900 border text-xs w-96  mt-1'  id='one' placeholder='Employee name'/>
            </div>

            <div className='mt-5'>
                <h1>Category</h1>
                <input value={category} onChange={(e)=>{
                      setcategory(e.target.value);
                }} type="text" placeholder='Design , Development etc ' className='p-1 rounded  bg-gray-900 border text-xs w-96  mt-1'  id='one'/>
            </div>

        </div>

        <div className='w-2/5 text-white-700'>
            
                <h1>Description</h1>
                <textarea value={description} onChange={(e)=>{
                      setdescription(e.target.value);
                }} name="" id="one" className=' rounded w-full outline-none h-52 resize-none  bg-gray-900 border '></textarea>
            
            
                <button className='border-emerald-500 w-full bg-emerald-500 rounded h-10 mt-2'> Create Task </button>
            </div>
       

    </form>
</div>
  )
}

export default Createtask