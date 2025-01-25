import React, { useContext, useEffect, useState } from 'react'
import Empolyee from './components/dashboard/Empolyee'
import Login from './components/auth/Login'
import { Master } from './components/dashboard/Master'
import { proper } from './context/TaskProvider'
import { getLocalstorage, setLocalstorage } from './utils/localStorage'


const App = () => {

  const [user, setuser] = useState(null)
  const [loggedin, setloggedin] = useState(null)

  const [userdata, setuserdata] = useContext(proper);


  useEffect(() => {

    const Loggedin = localStorage.getItem("loggedin")
    if (Loggedin) {

      const learn = JSON.parse(Loggedin);
      setuser(learn.role)
      setloggedin(learn.data)
    }

  }, [])

  const handle = (email, password) => {

    if (email == "admin@gmail.com" && password == "123") {
      setuser('admin')
      localStorage.setItem('Loggedin', JSON.stringify({ role: 'admin' }))

    } else if (userdata) {

      const employees = userdata.find((e) => email == e.email && password == e.password);
      if (employees) {

        setuser('employees')
        setloggedin(employees)
        localStorage.setItem('Loggedin', JSON.stringify({ role: 'employees', data: employees }))
      }

    } else {
      alert("Invalid crendtials ")
    }
  }


  return (
    <>

      {!user ? <Login handle={handle} /> : ''}
      {user == 'admin' ? <Master changeuser={setuser} /> : (user == 'employees' ? <Empolyee changeuser={setuser} data={loggedin} /> : null)}

      {/* <Empolyee />  */}

      {/* <Master />   */}

    </>
  )
}

export default App
