import react from 'react'; 

function SuccessMessage(props:any) {


    return (<div className=' flex items-center justify-center bg-white p-10 text-black rounded-lg max-w-1/5 max-h-1/5 '>
        <span>Success! Just a sec... logging you in. {props.message}</span>
    </div>)
}

export { SuccessMessage }; 