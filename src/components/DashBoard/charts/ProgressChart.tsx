import React, { useEffect, useState } from 'react';
import { Update } from '../../sharedState/sharedState';
import { supabase } from '../../../BackendServices/supabase';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function ProgressCharts(props: any) {

    const [weeklyTasks, setweeklyTasks] = useState<any>(
        {
            totaTasks: '',
            completedTasks: ''
        }
    );
    const [monthlyTasks, setMonthlyTasks] = useState<any>([
        {
            totaTasks: '',
            completedTasks: ''
        }
    ]);
    const [yearlyTasks, setYearlyTasks] = useState<any>(
        {
            totaTasks: '',
            completedTasks: ''
        }
    );
    const { update, setUpdate, resetState } = Update();
    const date: Date = new Date();
    // start of the year date
    const startOfTheYear = new Date(date.getFullYear(), 0, 1);
    // convert to ISO String
    const startOfYear = startOfTheYear.toISOString();
    // end of the year date
    const endOfTheYear = new Date(date.getFullYear(), 11, 31);
    // convert end of the year date to ISO 
    const endOfYear = endOfTheYear.toISOString();
    // date of the begining of the month
    const beginningOfMonthDate: Date = new Date(date.getFullYear(), date.getMonth(), 1);
    // convert to beginning of Month Date to  ISO string
    const monthBeginningDate = beginningOfMonthDate.toISOString();
    // end of month date
    const endOfMonthDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    // convert end of month date to ISO string. 
    const endMonthDate = endOfMonthDate.toISOString();
    // day of the week.
    const currentDayofTheWeek: number = date.getDay();
    // numbers of days from the beginning of the week. 
    const dayOneOfWeek = currentDayofTheWeek - 0;
    // number of days to the end of the week. 
    const lastDayOfWeek = 6 - currentDayofTheWeek;
    // get the date of the begining of the week.
    const startOfTheWeek = new Date(date.getTime() - (dayOneOfWeek * 24 * 60 * 60 * 1000));
    // convert the date of the begining of the week to this ('2024-04-03') format.
    const startOfWeekDate = startOfTheWeek.toISOString();
    // get the date of the end of the week. 
    const endOfTheWeek = new Date(date.getTime() + (lastDayOfWeek * 24 * 60 * 60 * 1000));
    // convert the date of the end of the week to this ('2024-04-03') format.
    const endOfWeek = endOfTheWeek.toISOString();


    useEffect(() => {

        // take information for the week,
        // this information to be displayed in Inprogress Tasks.

        async function getData() {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { data, error } = await supabase.from('tasks').select('*').eq('userID', user.id);
                if (data) {
                    const inCompleteYearTasks = data.filter((task: any) => {
                        if (task.start >= startOfYear && task.start <= endOfYear || task.completion >= startOfYear
                            && task.completion <= endOfYear) {

                            if (task.completed === null && task.skip === null || task.completed === null && task.skip !== null) {
                                return task;
                            };
                        };
                    });
                    const completedYearlyTasks = data.filter((task: any) => {

                        if (task.start >= startOfYear && task.start <= endOfYear || task.completion >= startOfYear
                            && task.completion <= endOfYear) {
                            if (task.completed === 'yes') {
                                return task;
                            };
                        };
                    });

                    const incompleteMonthTasks = data.filter((task: any) => {
                        if (task.start >= monthBeginningDate && task.start <= endMonthDate || task.completion >= monthBeginningDate
                            && task.completion <= endMonthDate) {

                            if (task.completed === null && task.skip === null || task.completed === null && task.skip !== null) {
                                return task;
                            };

                        };
                    });

                    const completedMonthlyTask = data.filter((task: any) => {
                        if (task.start >= monthBeginningDate && task.start <= endMonthDate || task.completion >= monthBeginningDate
                            && task.completion <= endMonthDate) {

                            if (task.completed === 'yes') {
                                return task;
                            };
                        };
                    });

                    const incompleteWeeklyTasks = data.filter((task: any) => {

                        if (task.start >= startOfWeekDate && task.start <= endOfWeek || task.completion >= startOfWeekDate && task.completion <= endOfWeek) {
                            if (task.completed === null && task.skip === null || task.completed === null && task.skip !== null) {
                                return task;
                            };
                        };
                    });
                    const weeklyCompletedTasks = data.filter((task: any) => {

                        if (task.start >= startOfWeekDate && task.start <= endOfWeek || task.completion >= startOfWeekDate && task.completion <= endOfWeek) {
                            if (task.completion === 'yes') {
                                return task;
                            };
                        };

                    });

                    console.log('weekly tasks', weeklyTasks.length);

                    setYearlyTasks((yearlyTasks: any) => ({ ...yearlyTasks, totalTasks: inCompleteYearTasks.length, completedTasks: completedYearlyTasks.length }));
                    setMonthlyTasks((monthlyTasks: any) => ({ ...monthlyTasks, totalTasks: incompleteMonthTasks.length, completedTasks: completedMonthlyTask.length }));
                    setweeklyTasks((weeklyTask: any) => ({ ...weeklyTasks, totalTasks: incompleteWeeklyTasks.length, completedTasks: weeklyCompletedTasks.length }));

                };

                if (error) {
                    console.log('there is an error fetching tasks from database for the charts', error.message);
                };
            };
        };

        getData();
        resetState();
    }, [update]);

    const yearlyData = {
        labels: ["Current year's Incomplete Tasks", "current year completed Tasks"],
        datasets: [
            {
                label: 'Tasks',
                data: [yearlyTasks.totalTasks, yearlyTasks.completedTasks],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const monthlyData = {
        labels: ["Current month incomplete Tasks", 'Current month completed Tasks'],
        datasets: [
            {
                label: 'Tasks',
                data: [monthlyTasks.totalTasks, monthlyTasks.completedTasks],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const weeklyData = {
        labels: ['Current week Incomplete Tasks', 'current week completed Tasks'],
        datasets: [
            {
                label: 'Tasks',
                data: [weeklyTasks.totalTasks, weeklyTasks.completedTasks],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    return (<div className='flex flex-col md:flex-row'>
        <Doughnut data={yearlyData} />
        <Doughnut data={monthlyData} />
        <Doughnut data={weeklyData} />
    </div>);
};

export { ProgressCharts }; 