import React from 'react';
import { SideBar } from '../../components/DashBoard/navigation/sideBar';
import { ProgressAndForecastChart } from '../../components/DashBoard/charts/ProgressChart';
import { TasksInProgress } from '../../components/DashBoard/Tasks/TasksInProgress'; 
import { UpcomingTasks } from '../../components/DashBoard/Tasks/UpcomingTasks'; 
import { Rates } from '../../components/DashBoard/Tasks/Rates'; 
import { CreateNewTask } from '../../components/DashBoard/Tasks/CreateNewTasks';


function UserDashBoardPage(props:any) {








    return (
        <main className='flex min-h-screen min-w-screenf bg-gray-800'>
            <SideBar />
            <div title='mainPage' className='h-screen w-full flex flex-col md:flex-row '>
                <div title='statsAndCharts' className=' h-full w-full flex flex-col justify-center gap-8 bg-gray-900 p-8'>
                    <div title='rates' className='hidden md:block h-[33vh] flex flex-col scroll overlfow-y-scroll justify-between justify-center gap-2 rounded-lg'>
                        <Rates/>
                    </div>
                    
                    <div title='progress and forecast overview chart' className='flex bg-gray-800 h-[33vh] justify-center transition hover:scale-100 text-white rounded-lg'>
                        <ProgressAndForecastChart/>
                    </div>

                    <div title='TasksInProgress' className='h-[33vh] flex flex-col text-white rounded-lg'>
                        <TasksInProgress />
                    </div>
                </div>
                <div title='UpcomingTasks' className=' h-[33vh] md:h-screen min-w-screen md:w-1/5 scroll overflow-y-scroll flex flex-col items-center md:p-0 md:right-0'>
                    <UpcomingTasks/>
                </div>
               
            </div>
            <CreateNewTask/>
        </main>
    );
};

export default UserDashBoardPage; 