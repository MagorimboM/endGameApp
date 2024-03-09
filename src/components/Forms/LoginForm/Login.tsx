
import { RiLoginCircleFill } from "react-icons/ri";
import { IoArrowBackCircle } from "react-icons/io5";
import react, { useEffect, useState } from 'react';
import { supabase } from '../../../BackendServices/supabase';
import { useNavigate } from 'react-router-dom';



function LoginForm(props: any) {

    const navigate = useNavigate();
    const [userCredentials, setUserCredentials] = useState<any>({ email: '', password: '' });
    const [logInError, setLoggedInError] = useState<any>(null);
    const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);


    // send credentials to supabase to login and recieve session tokens

    const logIn = async (event: any) => {
        // send login credentials 
        event.preventDefault()

        const { error, } = await supabase.auth.signInWithPassword(userCredentials);
        // if there is an issue with the login credentials let me know 
        if (error) {
            setLoggedInError(error);
        } else {
            // if there is no error and the login is successfull then naviagate to dashboard
            navigate('/UserDashBoardPage');
            setUserLoggedIn(true);
        };
    };


    
    // for code readability used an object to store all functions relating to collecting data from login form. 
    const takeUserCredentials = {
        email: (event: any) => { setUserCredentials((userCredentials: any) => ({ ...userCredentials, email: event.target.value })) },
        password: (event: any) => { setUserCredentials((userCredentials: any) => ({ ...userCredentials, password: event.target.value })) }
    };


    useEffect(() => {
        // check for existing session  and valid, if so redirect to the dashboard or else stay on the login page. 
        const checkIfSessionIsValid = async () => {
            const { data, error } = await supabase.auth.getUser();

            if (data.user != null) {
                console.log(data.user);
                navigate('/UserDashBoardPage');
                setUserLoggedIn(true);
            }
            if (error) {
                console.log('no user is logged in from this device/window explorer', error.message);
            };
        };
        checkIfSessionIsValid();
    }, []);



    // login page

    if (userLoggedIn === true) {
        return (<h1>loading... </h1>);
    } else {
        return (
            <div id='form' className='min-h-[50vh] min-w-[50vw] flex flex-col gap-8 items-center justify-center'>
                <div className='flex flex-col item-center justify-center'><h1 className='text-white text-4xl font-bold'>Lets Do this!</h1>
                    <span className='text-md text-white'>Lets finish off what we started!</span>
                </div>
                <div className='w-full flex flex-col gap-4'>
                    {logInError ? (<p className='text-red-500 font-md'> Login Error {logInError.message}</p>) : (null)}
                    <input onChange={takeUserCredentials.email} value={userCredentials.email} className='border text-white rounded-lg p-4 w-full bg-transparent' required type='email' placeholder='Email Address' />
                    <input onChange={takeUserCredentials.password} value={userCredentials.password} className='border text-white rounded-lg p-4 w-full bg-transparent' required type='password' placeholder='Password' />
                    <button
                        className='flex flex items-center justify-center gap-2 bg-fuchsia-500 hover:shadow-xl
                          hover:text-white hover:shadow-fuchsia-500/50 w-full rounded-lg p-2 transition duration-300' onClick={logIn}>
                        Login <RiLoginCircleFill />
                    </button>
                </div>
                <div className='w-full justify-center flex items-center gap-4'> <span className='text-white'>Not yet?</span>
                    <a href='/'><span className='underline underline-offset-8 flex gap-2 text-white items-center hover:text-fuchsia-500 hover:shadow-xl hover:scale-110 ease-in-out transition duration-300' >Go Home <IoArrowBackCircle />
                    </span></a></div>
            </div>
        );
    };
};

export { LoginForm }; 