import React from 'react'

const TaskNo = ({ data }) => {
  return (
    <>

      <div className=' flex items-center justify-center  m-5 w-full '>
        <div className='   m-5 bg-red-400 p-10 w-1/2 rounded-xl '>

          <h1 className='text-3xl font-bold'>{data.task_numbers.new_task}</h1>
          <h1 className='text-2xl font-semibold'>New Task</h1>

        </div>
        <div className='   m-5 bg-blue-400 p-10 w-1/2 rounded-xl '>

          <h1 className='text-3xl font-bold'>{data.task_numbers.completed_task}</h1>
          <h1 className='text-2xl font-semibold'>Completed </h1>

        </div>
        <div className='  m-5 bg-green-400 p-10 w-1/2 rounded-xl '>

          <h1 className='text-3xl font-bold'>{data.task_numbers.active}</h1>
          <h1 className='text-2xl font-semibold'>Accepted </h1>

        </div>
        <div className='  m-5 bg-yellow-400 p-10 w-1/2 rounded-xl text-black '>

          <h1 className='text-3xl font-bold'>{data.task_numbers.failed}</h1>
          <h1 className='text-2xl font-semibold'>Failed </h1>

        </div>

      </div>
    </>
  )
}

export default TaskNo
