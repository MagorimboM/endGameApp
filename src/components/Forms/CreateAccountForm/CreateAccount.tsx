import React from 'react';
import {supabase} from '../../../BackendServices/supabase';
import { RiLoginCircleFill } from "react-icons/ri";
import { IoArrowBackCircle } from "react-icons/io5";
import { useState, useEffect } from 'react';



// need to clear fields after i recieved response from supabase

function CreateAccountForm() {

    const [renderComponent, setRenderComponent] = useState<any>(null);
  
    // update login outcomes
    const [signUpOutcome, setSignUpOutcome] = useState<any>(
        {
            error: null,
            success: null
        }
    );
    //record/take in userCredentials
    const [userCredentials, setUserCredentials] = useState<any>({
        email: '',
        password: '',
        options: {
            // eslint-disable-next-line no-restricted-globals
            emailRedirectTo: `${location.origin}/`,
            data: {
                first_name: ''
            }
        }
    });
    // for the sake of code readability decided to create an object of functions
    const takeUserCredentials = {
        email: (event: any) => setUserCredentials((userCredentials: any) => ({ ...userCredentials, email: event.target.value })),
        password: (event: any) => setUserCredentials((userCredentials: any) => ({ ...userCredentials, password: event.target.value })),
        name: (event: any) => setUserCredentials((userCredentials: any) => ({
            ...userCredentials, options: {
                // eslint-disable-next-line no-restricted-globals
                emailRedirectTo: `${location.origin}/login`,
                data: {
                    first_name: event.target.value
                }
            }
        }))
    };
    // onclick send credentials to supabase for account creation and await response from supabase API
    const handleSignUp = async (event: any) => {
        event.preventDefault();
        try {
            const { error, data } = await supabase.auth.signUp(userCredentials);
            if (data) {
                setSignUpOutcome((signUpOutcome: any) => ({ ...signUpOutcome, success: data }))
                console.log('here is the success: ', data);
        
            }
            else if (error) {
                setSignUpOutcome((signUpOutcome: any) => ({ ...signUpOutcome, error: error.message }))
                console.log('here is the error', error);           
            }
        } catch (error) {
            console.log('appears to be a network or operation error in signingup')
        }
    };

    // check the signUpOutcomes for errors or success messages, if error  render error message or if success render sucess message

    return (

        <div id='form' className='min-h-[50vh] min-w-[50vw] flex flex-col gap-8 items-center justify-center'>
            <div className='flex flex-col item-center justify-center'><h1 className=' flex justify-center text-white text-4xl font-bold'>Welcome!</h1>
                <span className='text-md text-white'>You are successfull when you make the first step - John Maxwell</span>
            </div>
            <div className='w-full flex flex-col gap-4'>
                {signUpOutcome.error != null ? (<p className='text-red-500 font-md'> Error signing up, {signUpOutcome.error.message}</p>) : (null)}
                {signUpOutcome.message != null ? (<p className='text-red-500 font-md'> Check your email for verification link and login! </p>) : (null)}
                <input onChange={takeUserCredentials.name} value={userCredentials.options.data.first_name} className='border text-white rounded-lg p-4 w-full bg-transparent' required type='text' placeholder='What shall we call you?' />
                <input onChange={takeUserCredentials.email} value={userCredentials.email} className='border text-white rounded-lg p-4 w-full bg-transparent' required type='email' placeholder='Email Address' />
                <input onChange={takeUserCredentials.password} value={userCredentials.password} className='border text-white rounded-lg p-4 w-full bg-transparent' required type='password' placeholder='Password' />
                <button
                    className='flex flex items-center justify-center gap-2 bg-fuchsia-500 hover:shadow-xl
                          hover:text-white hover:shadow-fuchsia-500/50 w-full rounded-lg p-2 transition duration-300' onClick={handleSignUp}>
                    CreateAccount <RiLoginCircleFill />
                </button>
            </div>
            <div className='w-full justify-center flex items-center gap-4'> <span className='text-white'>Not ready?</span>
                <a href='/'><span className='underline underline-offset-8 flex gap-2 text-white items-center hover:text-fuchsia-500 hover:shadow-xl hover:scale-110 ease-in-out transition duration-300' >Go Home <IoArrowBackCircle />
                </span></a></div>
        </div>
    );
};

export { CreateAccountForm }; 