import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


function Landing() {






    return (<div>
        <div className=' flex flex-col rounded-xl md:h-[50vh] md:w-[50vw]  p-4 items-center justify-center gap-4'>
            <div id='createAccountLink' className='flex flex-col items-center '>
                <h1 className='font-bold text-white text-5xl'> Get a visual of where your habits will take you</h1>
                <p className='text-white'>Backed by behavioral science, EndGame Vision is an accountability partner in your pocket
                    to help you make smart changes and build healthy habits.
                    Ready to take your life to the next level?</p>
                <a href='/CreateAccount' className='flex w-full items-center justify-center text-white'>
                    <button className='w-full mt-8 rounded-lg bg-indigo-500 transition duration-300 text-white p-2 hover:shadow-xl hover:shadow-indigo-500/50 '>
                        Start your journey</button>
                </a>
            </div>
            <div className='flex flex justify-center items-center mt-4 w-full'><span className='w-full border-fuchsia-400 border' /><span className='border-2 border-fuchsia-400 p-4 text-white rounded-full'><span>OR</span></span><span className=' border-fuchsia-400 w-full border' /></div>
            <div id='loginLink' className='flex flex-col items-center'>

                <div className='text-white flex flex-col items-center'><h1 className='font-bold text-white text-5xl'>
                    You have already started....</h1></div>
                <a href='/login' className='flex w-full items-center justify-center text-white'>  <button className='w-full flex items-center justify-center gap-2
                 mt-8 rounded-lg bg-indigo-500 p-2 hover:shadow-xl hover:shadow-indigo-500/50 transition duration-300 '>
                    Continue your journey <FaLongArrowAltRight />
                </button></a>
            </div>
        </div>
    </div>);
};

export { Landing }; 