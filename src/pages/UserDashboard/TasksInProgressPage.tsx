import React, {useEffect, useState} from 'react';
import { ProgressAndForecastChart } from '../../components/DashBoard/charts/ProgressChart';
import { SideBar } from '../../components/DashBoard/navigation/sideBar';
import { TasksInProgress } from '../../components/DashBoard/Tasks/TasksInProgress';




function TasksInProgressPage(props: any) {

    // fetch data that is not for the day. if the current date is inbetween start and due date then display on 
    // current task.  if the task is not falling within the current date send it to the upcoming tasks

   

    return (
        <main className='flex min-h-screen min-w-screen bg-gray-800'>
            <div title='sideBar'>
                <SideBar />
            </div>
            <div title='chartAndList' className='h-full w-full flex flex-col p-8 bg-gray-900 '>
                <div title='Title' className='flex justify-center mb-4 mt-4 p-2 '><h1 className=' font-bold text-2xl text-white '>Current Rate of Completing Tasks</h1></div>
                <div title='Task In Progress Chart' className='bg-gray-800 flex w-full h-[50vh] text-white p-4 rounded-lg'>
                    <ProgressAndForecastChart />
                </div>
                <div title='Tasks In Progress List' className='flex flex-col w-full h-[50vh] text-white p-4 rounded-lg'>
                    <TasksInProgress />
                </div>
            </div>
        </main>

    );
};

export default TasksInProgressPage; 