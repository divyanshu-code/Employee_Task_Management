import React from 'react'
import Header from '../other/Header'
import Taskno from '../other/Taskno'
import Tasklist from '../tasklist/Tasklist'

const Empolyee = (props) => {
  
  return (
    <>
    
     <div className='p-20 '>
     
     
     <Header hero={props.changeuser} data={props.data}/>
     <Taskno data={props.data}/>
     <Tasklist data={props.data}/>
     </div>
       
    </>
  )
}

export default Empolyee