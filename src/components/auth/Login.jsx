import React, { useState } from 'react'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

const Login = ({handle}) => {
  

   const [email, setemail] = useState('');
   const [password, setpassword] = useState('')
   
   const submithandle = (e)=>{
     e.preventDefault();
     handle(email, password);

     setemail("");
     setpassword("");
   }

    const [show, setshow] = useState(false)

    const showpassword = ()=>{
       
          setshow(!show)
    }

  return (
    <>
  
     <div className=' flex items-center justify-center w-screen h-screen '>
        
        <div  id='hlo' className=' border-10  p-20 rounded-xl  '>
           
           <form className='flex flex-col items-center justify-center mt-10' onSubmit={(e)=>{
                    submithandle(e);
           }}>
              
           <input  value={email} onChange ={(e)=>{
                    
                    setemail(e.target.value);
                    
           }}
           required 
           className = 'text-black m-4 rounded-xl font-medium p-2 outline-none' type="email" placeholder='enter your email'/>
 
    <div className='mt-4 flex items-center justify-between '>
    <input value={password} onChange ={(e)=>{
                    
                    setpassword(e.target.value);
                    
           }}
           required
           className = 'text-black  rounded-xl font-medium p-2 outline-none' type={show ? "text" : "password"} placeholder=' enter password '/>
           <p onClick={showpassword} className=' -ml-6 cursor-pointer '>{show ? <FaEyeSlash /> : <FaEye/>}</p>

    </div>
          
            <button className = 'bg-emerald-500 rounded-xl font-medium p-2 outline-none  m-5 p-2'> Log in </button>
           </form>
       
        </div>
        

     </div>
    </>
  )
}

export default Login