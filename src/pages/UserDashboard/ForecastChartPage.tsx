import React from 'react'; 
import { ProgressAndForecastChart } from '../../components/DashBoard/charts/ProgressChart';
import { SideBar } from '../../components/DashBoard/navigation/sideBar'; 
import { TasksInProgress } from '../../components/DashBoard/Tasks/TasksInProgress';

function ForecastChartPage() {
    
    return (
        <main className='flex min-h-screen min-w-screen bg-gray-800'>
            <div title='sideBar'>
                <SideBar/>
            </div>
            <div title='chartAndList' className='h-full w-full flex flex-col bg-gray-900 p-8'>
                <div title='heading' className='flex justify-center mb-4 mt-4 p-2 '><h1 className=' font-bold text-2xl text-white '>Current Habit Forecast</h1></div>
                <div title='charts' className='bg-gray-800 flex w-full h-[50vh] text-white p-4 rounded-lg'>
                    <ProgressAndForecastChart />
                </div>
                <div title='TasksInProgress' className='flex flex-col w-full h-[50vh] text-white p-4 rounded-lg'>
                    <TasksInProgress />
                </div>
            </div>

            
    </main>); 
}; 

export default ForecastChartPage; 