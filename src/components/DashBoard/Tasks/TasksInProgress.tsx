import React from 'react';
import { MdAddTask } from "react-icons/md";
import { supabase } from '../../../BackendServices/supabase';
import { useState, useEffect } from 'react';
import { Update,} from '../../../components/sharedState/sharedState';

function TasksInProgress(props: any) {
    // fetchData errors for further handling
    const [errorFetchingTasks, setErrorFetchingTasks] = useState<any>();
    // tasks from supabase database
    const [tasks, setTasks] = useState<any>();
    // global state for re-render trigger
    const { update, setUpdate, resetState } = Update();
 
    useEffect(() => {
        // overall operation : fetch data and re-render when update changed value from false to true.
        const fetchTasks = async () => {
            // fetch tasks of the day that are not done and not skipped
            const { data, error } = await supabase.from('tasks').select('*').filter('completed', 'is', null).filter('skip', 'is', null);
            // for errors send to output for handling. 
            if (error) {
                console.log(' there is an error fetching tasks from database');
                setErrorFetchingTasks(error);
            };
            // if tasks recieved store data in state variable
            if (data) {
                setTasks(data);
                
            };
        };
        // fetch tasks from supabase
        fetchTasks();
        // reset re-render state to false
        resetState();

    }, [update]);

    async function completeTasks(event: any) {
        // update tasks in database as completed
        const { error } = await supabase.from('tasks').update({ completed: 'yes' }).eq('id', event);
        if (error) {
            // output for further sollution
            console.log('we have run into error, issues updating tasks to complete', error);
        } else {
            // trigger re-render if operation is successful 
            setUpdate();
        };
    };

    async function skipTask(event: any) {
        // update task in database as skipped
        const { error } = await supabase.from('tasks').update({ skip: 'skip' }).eq('id', event);
        if (error) {
            // output errors for further handling
            console.log('we have run into error, issues updating tasks to skip', error);
        } else {
            // trigger re-render if operation is successfull
            
        };
    };
    return (
        <>

            <div title='tasks-pending-tickoff' className='flex flex-col border-b mb-4'>
                <div>
                    <h1 className='font-bold text-3xl'>Tasks</h1>
                </div>
                <ul className='w-full h-full flex flex-col text-white'>
                    <li className='flex items-center justify-between p-4'>
                        <span className='w-1/5 flex justify-center'>
                            <MdAddTask />
                        </span>
                        <span className='w-1/5 flex justify-center font-semibold text-xs md:text-md'>
                            Description
                        </span>
                        <span className=' w-1/5 flex  justify-center  font-semibold text-xs md:text-md hidden md:block'>
                            Due
                        </span>
                        <span className=' w-1/5 flex justify-center font-semibold text-xs md:text-md'>
                            Action
                        </span>
                        <span className=' w-1/5 flex justify-center font-semibold text-xs md:text-md'>
                            Action
                        </span>
                    </li>
                </ul>
            </div>

            <div className='h-full scroll overflow-y-scroll '>
                <ul className='h-full w-full flex flex-col gap-2 text-white rounded-lg'>
                    {Array.isArray(tasks) ? (tasks.map((item: any) => (
                        <li key={item.id} className='flex bg-gray-800 items-center transition hover:scale-100 hover:bg-gray-700 p-4 justify-between rounded-lg'>
                            <span className='w-1/5 flex justify-center text-sm font-semibold text-sm md:text-lg'>
                                <MdAddTask />
                            </span>
                            <span className='w-1/5 flex justify-center text-xs md:text-md'>
                                <p>{item.description}</p>
                            </span>
                            <span className='w-1/5 flex justify-center text-xs md:text-md hidden md:block '>
                                {item.completion}
                            </span>
                            <span className='w-1/5 flex justify-center text-xs md:text-md '>
                                <button type='submit' onClick={() => (completeTasks(item.id))} className=' flex justify-center border border-green-500 hover:bg-green-500 duration-500 ease-in-out rounded-lg p-2 transition-transform transform hover:scale-105'>Done</button>
                            </span>
                            <span className='w-1/5 flex justify-center text-xs md:text-md'>
                                <button type='submit' onClick={() => (skipTask(item.id))} className=' flex justify-center border border-amber-500 hover:bg-amber-500 duration-500 ease-in-out rounded-lg p-2 transition-transform transform hover:scale-105'>skip</button>
                            </span>
                        </li>
                    ))) : (null)}

                </ul>
            </div>
        </>
    );
};

export { TasksInProgress }; 