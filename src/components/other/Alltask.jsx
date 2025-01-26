import React, { useContext } from 'react'
import { proper } from '../../context/TaskProvider'

const AllTask = () => {

  const  [userdata , setuserdata] = useContext(proper)


  return (
    <div className='bg-[#1c1c1c]  h-[72%] ml-10 mr-10 p-3 mt-5' id='alltask'>
      <div className='bg-red-400 m-5 flex  border p-3  rounded  font-semibold justify-between '>
        <h1 className='w-1/5 ml-5'>Empolyee Name</h1>
        <h2 className='w-1/5  '>New Task </h2>
        <h3 className='w-1/5 '>Active Task</h3>
        <h4 className='w-1/5  '>Completed</h4>
        <h5 className='w-1/5  '>Failed</h5>
      </div>

      <div >
        {userdata.map((e,idx) => {

          return <div key={idx} className=' border-2 border-emerald-500 m-5 flex  p-3  rounded  font-semibold justify-between '>
            <h1 className='font-semibold w-1/5 text-blue-500 ml-5'>{e.name}</h1>
            <h4 className='font-semibold w-1/5 text-pink-500'>{e.task_numbers.new_task}</h4>
            <h2 className=' font-semibold w-1/5 text-yellow-700'>{e.task_numbers.active}</h2>
            <h3 className='font-semibold w-1/5 text-red-500'>{e.task_numbers.completed_task}</h3>
            <h4 className='font-semibold w-1/5 text-orange-500'>{e.task_numbers.failed}</h4>
          </div>
        })}
      </div>


    </div>
  )
}

export default AllTask