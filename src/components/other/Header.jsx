import React from 'react'

const Header = (props) => {

  const logoutuser = () => {

    localStorage.setItem('Loggedin', '')
    //  window.location.reload()
    props.hero('')

  }
  return (
    <>

      <div className='flex items-center justify-between w-full  bg-gray-700 border border-gray-700 p-5 ml-5 rounded '>
       
        <h1 className='text-3xl font-bold'>Welcome back <br /> Hello 👋  </h1>
        <button onClick={logoutuser} className='bg-red-700 p-2 font-bold rounded mr-20'> Log Out  </button>

      </div>
    </>
  )
}

export default Header