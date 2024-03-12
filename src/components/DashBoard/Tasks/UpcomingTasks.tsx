import React, { useEffect, useState } from 'react';
import { supabase } from '../../../BackendServices/supabase';
import { Update } from '../../sharedState/sharedState';



function UpcomingTasks(props: any) {
    // current date
    const currentDate = new Date();
    // upcoming tasks 
    const [upcomingTasks, setUpcomintTasks] = useState<any>();
    // global state for re-render trigger
    const { update, setUpdate, resetState } = Update();


    useEffect(() => {
        // get current date
        const currentDate = new Date();

        const fetchData = async () => {

            // collect information from supabase database
            const { data, error } = await supabase.from('tasks').select("*");
            if (data) {
                // if recieved data filter the tasks and only show tasks that start later than current date
                const upComing = data.filter((items: any) => {
                    return items.start > currentDate.toISOString()
                });

                setUpcomintTasks(upComing);
            };
            if (error) {

                console.error('there is an error upcoming Tasks: ', error);
            };
        };
        // run fetch operation
        fetchData();
        // reset for future re-render triggers
        resetState(); 
        /* when update value changes re-render component */
    }, [update]);


    const deleteTask = async (Id: any) => {
        const { error } = await supabase.from('tasks').delete().match({ id: Id });
        if (!error) {
            setUpdate(); 
            console.log('deleted a task'); 
        }; 
    };
    return (<>

        <div title='upcomingTasks' className='h-full w-full flex flex-col text-white md:right-0 p-4 bg-gray-800'>
            <h1 className='font-bold text-2xl mb-4 md:mt-4'>Upcoming Tasks</h1>
            <ul className='w-full h-full flex flex-col scroll overflow-y-scroll text-white gap-3'>
                {Array.isArray(upcomingTasks) ? upcomingTasks.map((task: any) => (
                    <li key={task.id} className='flex md:flex-col items-center justify-between 
                    p-4 gap-2 transition hover:scale-100 hover:bg-gray-700 bg-gray-900 rounded-lg'>
                        <span className=' text-xs md:text-md'>
                            {task.description}
                        </span>
                        <span className='text-xs md:text-md'>
                            start: {task.start}
                        </span>
                        <span className='text-xs md:text-md rounded-lg '>
                            <button type='submit' onClick={() => (deleteTask(task.id))} className=' flex justify-center border border-red-500 
                            hover:bg-red-500 duration-500 ease-in-out rounded-lg p-2
                            transition-transform transform hover:scale-105'>Delete</button>
                        </span>
                    </li>
                )) : (null)}
            </ul>
        </div>

    </>);
};

export { UpcomingTasks }; 