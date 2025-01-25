import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'


const TaskList = ({ data }) => {

    return (

        <>
            <div id='tasklist' className='h-80 w-full gap-5 flex itmes-center justify-start overflow-x-auto flex-nowrap ml-5'>

                {data.tasks.map((elem, idx) => {

                    if (elem.active) {
                        return <AcceptTask key={idx} data={elem} />
                    }
                    if (elem.new_task) {
                        return <NewTask key={idx} data={elem} />
                    }

                    if (elem.completed_task) {
                        return <CompleteTask key={idx} data={elem} />
                    }

                    if (elem.failed) {
                        return <FailedTask key={idx} data={elem} />
                    }
                })}

            </div>
        </>
    )
}

export default TaskList