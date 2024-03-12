import React from 'react';
import { supabase } from '../../../BackendServices/supabase';
import { MdSettings, MdLogout } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { VscNewFile } from "react-icons/vsc";
import { LuLineChart } from "react-icons/lu";
import { FaChartBar } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateNewTask } from '../Tasks/CreateNewTasks';

function SideBar() {
    const navigate = useNavigate();
    const [singoutError, setStignOutError] = useState<any>();
    const [show, setShow] = useState<boolean>(false);

    const navigations = [

        // side bar elements for readability

        {

            icon: <GrOverview />,  // overview 
            href: '/UserDashBoardPage'
        }
        , {

            icon: <MdSettings />,// account settings 
            href: '/'
        }
    ];

    const logoutHandle = async (event: any) => {

        // signout user from current session

        const { error } = await supabase.auth.signOut();

        if (error) {

            // any signout errors console out for further handling
            setStignOutError(error);
            console.log(error);

        } else {
            // if signout operation is successfull then navigate page to home page. 
            navigate('/');

        };

    };

    const showCreateTaskForm = () => {
        // show createTask form 
        setShow(true);
    };


    return (<>
        <nav className='justify-center p-4 flex flex-col gap-6 left-0 min-h-screen w-20'>
            <button title='Create New Task' onClick={showCreateTaskForm} className='rounded-lg hover:bg-indigo-500 duration-300 
                    hover:shadow-indigo-500/50 shadow-xl transition ease-in-out p-4 flex text-white items-center'>
                <VscNewFile />

            </button>
            <ul className=' text-white gap-6 flex flex-col'>
                {navigations.map((item: any, index: any) => (
                    <a key={index} href={item.href} className='text-xs md:text-med rounded-lg hover:bg-indigo-500 duration-300 
                    hover:shadow-indigo-500/50 shadow-xl transition ease-in-out p-4 flex items-center'>{item.icon}</a>

                ))}

                <button title='logout' type='submit' className='rounded-lg hover:bg-indigo-500 duration-300 
                    hover:shadow-indigo-500/50 shadow-xl transition ease-in-out p-4 flex items-center'onClick={logoutHandle}>
                    <MdLogout />

                </button>
            </ul>
        </nav>

        <CreateNewTask show={show} setShow={setShow} />
    </>
    );
};

export { SideBar }; 