import React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from '../../../BackendServices/supabase';
import { Update } from '../../../components/sharedState/sharedState';






function CreateNewTask(props: any) {
    const { setUpdate } = Update();
    const [newTask, setNewTask] = useState<any>({
        name: '',
        description: '',
        start: '',
        completion: ''
    });
    const today = new Date().toISOString().split('T')[0];
    console.log(today)

    const inputInfo = [

        // form fields and attributes for better readability
        {
            title: 'Name of Task',
            placeHolder: 'Name of Task',
            value: newTask.name,
            onChange: (event: any) => { setNewTask((newTask: any) => ({ ...newTask, name: event.target.value })) },
            type: 'text'
        },
        {
            title: 'Description',
            placeHolder: 'Description',
            value: newTask.description,
            onChange: (event: any) => { setNewTask((newTask: any) => ({ ...newTask, description: event.target.value })) },
            type: 'text'
        },
        {
            title: 'Start Date',
            placeHolder: 'StartDate',
            min : today, 
            value: newTask.start,
            onChange: (event: any) => { setNewTask((newTask: any) => ({ ...newTask, start: event.target.value })) },
            type: 'date'
        },
        {
            title: 'Completion Date',
            placeHolder: 'Completion Date',
            min: newTask.start,
            value: newTask.start,
            onChange: (event: any) => { setNewTask((newTask: any) => ({ ...newTask, completion: event.target.value })) },
            type: 'date'
        },


    ];
    function Hide() {
        // hide form     
        props.setShow(false);
    };
    async function createTask() {
        // send new task created to supabase database; 

        const { error } = await supabase.from("tasks").insert(newTask);

        if (error) {
            // console output errors for further error handling

            console.log('there is an error with creating task:', error.message);
        } else {

            // reset all input fields 
            setNewTask({
                name: '',
                description: '',
                start: '',
                completion: ''
            })
            // hide create task form
            props.setShow(false);
            // trigger re-render
            setUpdate();

        };
    };

    if (props.show === true) {
        // show form when state is true
        return (
            <>
                <div className=' fixed inset-0 z-[1]
            flex items-center justify-center p-2 bg-gray-800 bg-opacity-30 backdrop-blur-sm rounded-lg'>

                    <div className='border rounded-xl flex flex-col gap-4 p-8 w-[50vw]'>
                        {inputInfo.map((item: any) => (
                            <input title={item.title} maxLength={15} placeholder={item.placeHolder} min={item.min} type={item.type} value={item.value} onChange={item.onChange}
                                required className='bg-none border  rounded-lg p-2 items-center' />))}
                        <button onClick={createTask} className='flex justify-center w-full p-3 bg-indigo-500 text-white rounded-lg transition-transform transform hover:scale-105' >submit</button>
                        <button onClick={Hide} className='flex justify-center w-full p-2 bg-red-500 text-white rounded-lg transition-transform transform hover:scale-105'>cancel</button>
                    </div>
                </div>
            </>
        );
    } else {
        // hide form when state is not true
        return null;
    }
};

export { CreateNewTask }; 