import React, { useEffect, useState } from 'react';
import { MdOutlineAccountCircle } from "react-icons/md";
import { supabase } from '../../../BackendServices/supabase';





function UserInforBar(props: any) {
    const [userInfo, setUserInfo] = useState<any>();
    useEffect(() => {
        const getUserInfo = async function () {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                setUserInfo(user.email);
            } else {
                console.log('noone is logged in');
            };
        };
        getUserInfo();
    }, [])
    // still need to finish this up....
    return (<>
        <div className=' flex justify-between rounded-lg gap-4 items-center justify-center p-2 w-full bg-gray-800 text-white'>
            <div className='flex gap-5 '>
                <span className='flex items-center font-bold text-white text-lg'>Welcome</span>
            </div>
            <div className='flex gap-2 justify-center items-center '>
                <span className='flex items-center font-bold text-white text-lg'>{userInfo}</span>
                <span><MdOutlineAccountCircle /> </span>
            </div>
        </div>
    </>);
};

export { UserInforBar }; 