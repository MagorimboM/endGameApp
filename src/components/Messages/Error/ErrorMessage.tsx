import react from 'react';

function ErrorMessage(props: any) {


    return (<div className=' flex items-center justify-center bg-white p-10 text-black rounded-lg max-w-1/5 max-h-1/5 '>
        <span>ran into an error!, check this: {props.message}</span>
    </div>)
}

export { ErrorMessage }; 