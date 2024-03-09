import React from 'react';
import { IoMdArrowDropup } from "react-icons/io"
import { PiChartLineDownBold, PiChartLineUp } from "react-icons/pi";
import { PiChartLineUpFill } from "react-icons/pi";
import { IoIosTrendingUp } from "react-icons/io";





function Rates(props: any) {


    // still need to finish this up....


    return (<>


        <div className=' flex justify-between rounded-lg gap-4 items-center justify-center p-2 w-full bg-gray-800 text-white'>

            <div className='flex flex-col'> <span className='flex items-center font-bold text-white text-lg'>BTC-USD<IoMdArrowDropup className='text-green-500' /></span>
                <span className='font-bold text-gray-400 text-lg'> BTC-USD</span>
            </div>


            <div className='flex flex-col justify-center items-center '>
                <span className='flex'><IoIosTrendingUp className='text-green-500 mr-4' size={30} />20/30</span>
                <span>Today's completed </span>
            </div>

        </div>
        <div className='flex justify-between rounded-lg gap-4 items-center justify-center p-2 w-full bg-gray-800 text-white'>

            <div className='flex flex-col'> <span className='flex items-center font-bold text-white text-lg'> BTC-USD<IoMdArrowDropup className='text-green-500' /></span>
                <span className='font-bold text-gray-400 text-lg'> BTC-USD</span>
            </div>


            <div className='flex flex-col justify-center items-center '>
                <span className='flex'><IoIosTrendingUp className='text-green-500 mr-4' size={30} />20/30</span>
                <span>Today's completed </span>
            </div>

        </div>
        <div className='flex justify-between rounded-lg gap-4 items-center justify-center p-2 w-full bg-gray-800 text-white'>

            <div className='flex flex-col'> <span className='flex items-center font-bold text-white text-lg'> BTC-USD<IoMdArrowDropup className='text-green-500' /></span>
                <span className='font-bold text-gray-400 text-lg'> BTC-USD</span>
            </div>


            <div className='flex flex-col justify-center items-center '>
                <span className='flex'><IoIosTrendingUp className='text-green-500 mr-4' size={30} />20/30</span>
                <span>Today's completed </span>
            </div>

        </div>


    </>);
};

export { Rates }; 