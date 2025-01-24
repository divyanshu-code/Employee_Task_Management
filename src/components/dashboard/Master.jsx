import React from 'react'
import Createtask from '../other/Createtask'
import Header from '../other/Header'
import Alltask from '../other/Alltask'

export const Master = (props) => {
    return (
        <>

            <div className='w-full h-screen p-10'>

                <Header hero={props.changeuser} />
                <Createtask />
                <Alltask />
            </div>
        </>
    )
}

