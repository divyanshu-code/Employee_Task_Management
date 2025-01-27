import React, { useState } from 'react'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

const Login = ({ handle }) => {


  const [email, setemail] = useState('');
  const [password, setpassword] = useState('')

  const submithandle = (e) => {
    e.preventDefault();
    handle(email, password);

    setemail("");
    setpassword("");
  }

  const [show, setshow] = useState(false)

  const showpassword = () => {

    setshow(!show)
  }

  return (
    <>

      <div className=' flex items-center justify-center w-screen h-screen bg-gray-900'>

        <div className=' border-10  p-20 rounded-xl bg-gray-800 '>
         
         <h1 className='ml-16 font-bold text-3xl  text-white'>Welcome</h1>
        <h1 className='ml-9 mt-2 font-semibold text-gray-500 '>Please sign in to continue </h1>
          <form className='flex flex-col items-center justify-center mt-10' onSubmit={(e) => {
            submithandle(e);
          }}>

          

            <input value={email} onChange={(e) => {

              setemail(e.target.value);

            }}
              required
              className='text-black m-4 rounded-xl font-medium p-2 outline-none' type="email" placeholder='enter your email' />

            <div className='mt-4 flex items-center justify-between '>
              <input value={password} onChange={(e) => {

                setpassword(e.target.value);

              }}
                required
                className='text-black  rounded-xl font-medium p-2 outline-none' type={show ? "text" : "password"} placeholder=' enter password ' />
              <p onClick={showpassword} className=' -ml-6 cursor-pointer '>{show ? <FaEyeSlash /> : <FaEye />}</p>

            </div>

            <button className='bg-emerald-500 rounded-xl font-medium outline-none  m-5 p-2'> Log in </button>
          </form>

           
           <h1 className='text-white mt-3 ml-12 text-xs'>Admin Login: admin@gmail.com/123</h1>
           <h1 className='text-white ml-3 mt-2 text-xs'>Employee Login: emma.brown@example.com/123</h1>

        </div>

      </div>
    </>
  )
}

export default Login