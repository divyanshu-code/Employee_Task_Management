import React from 'react'

const FailedTask = ({data}) => {
  return (
   
    <div className='flex-shrink-0 h-72 w-80 bg-blue-400  rounded-xl ml-5 p-2'>

    <div className=' flex items-center justify-between mt-4 font-bold m-3'>
        <h1 className='bg-red-600  ml-2 rounded px-2 py-1'>  {data.category} </h1>
        <h1>{data.task_date}</h1>

    </div>

    <h3 className=' font-bold ml-5 text-2xl '>{data.title}</h3>
    <p className='ml-5 mt-2'>{data.description}</p>

    <div className='m-4 mt-14'>
        <button className='bg-gray-500 p-1 rounded  font-semibold'>Failed</button>
    </div>
</div>
  )
}

export default FailedTask