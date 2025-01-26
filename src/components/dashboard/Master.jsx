import React from 'react'
import CreateTask from '../other/CreateTask'
import Header from '../other/Header'
import AllTask from '../other/AllTask'

export const Master = (props) => {
    return (
        <>

            <div className='w-full h-screen p-10'>

                <Header hero={props.changeuser} />
                <CreateTask />
                <AllTask />
            </div>
        </>
    )
}

export default Master