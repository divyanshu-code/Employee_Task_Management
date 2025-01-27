import React from 'react'
import CreateTask from '../other/CreateTask'
import Header from '../other/Header'
import AllTask from '../other/AllTask'

export const Master = (props) => {
    return (
        <>

            <div className='w-full h-full p-10 bg-gray-700'>

                <Header hero={props.changeuser} />
                <CreateTask />
                <AllTask />
            </div>
        </>
    )
}

export default Master