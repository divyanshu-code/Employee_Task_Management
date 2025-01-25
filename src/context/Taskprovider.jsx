import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { getLocalstorage, setLocalstorage } from '../utils/localStorage';


export const proper = createContext();

const TaskProvider = ({children}) => {
      
  const [userdata, setuserdata] = useState(null)
  
   
  useEffect(() => {
     
    const {employees} = getLocalstorage();
    setuserdata(employees) 

  }, [])
  
 

  return (
    
       <proper.Provider value={[userdata , setuserdata]}>
        {children}
       </proper.Provider>
  )
}

export default TaskProvider