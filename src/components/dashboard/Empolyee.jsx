import React from 'react'
import Header from '../other/Header'
import TaskNo from '../other/TaskNo'
import TaskList from '../tasklist/TaskList'

const Empolyee = (props) => {
  
  return (
    <>
     <div className='p-20 '>
     
     
     <Header hero={props.changeuser} data={props.data}/>
     <TaskNo data={props.data}/>
     <TaskList data={props.data}/>
     </div>
       
    </>
  )
}

export default Empolyee