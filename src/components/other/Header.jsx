import React from 'react'

const Header = (props) => {

  const logoutuser = () => {

    localStorage.setItem('Loggedin', '')
    //  window.location.reload()
    props.hero('')

  }
  return (
    <>

      <div className='flex items-end justify-between w-full ml-10  '>

        <h1 className='text-3xl font-bold'> Hello 👋  </h1>
        <button onClick={logoutuser} className='bg-red-700 p-2 font-bold rounded mr-20'> Log Out  </button>

      </div>
    </>
  )
}

export default Header