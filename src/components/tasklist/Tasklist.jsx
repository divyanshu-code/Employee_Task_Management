import React from 'react'
import Accepttask from './Accepttask'
import Completetask from './Completetask'
import Failedtask from './Failedtask'
import Newtask from './Newtask'


const Tasklist = ({ data }) => {


    return (

        <>
            <div id='tasklist' className='h-80 w-full gap-5 flex itmes-center justify-start overflow-x-auto flex-nowrap ml-5'>

                {data.tasks.map((elem, idx) => {

                    if (elem.active) {
                        return <Accepttask key={idx} data={elem} />
                    }
                    if (elem.new_task) {
                        return <Newtask key={idx} data={elem} />
                    }

                    if (elem.completed_task) {
                        return <Completetask key={idx} data={elem} />
                    }

                    if (elem.failed) {
                        return <Failedtask key={idx} data={elem} />
                    }
                })}

            </div>
        </>
    )
}

export default Tasklist