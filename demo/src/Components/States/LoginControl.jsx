import { useState} from 'react';


const LoginControl = () => {
    const [log, setLog] = useState(false)
    
    if (log){
        return (
            <>
           <h1>Welcome back!</h1>
            <button onClick={()=>setLog(a=>!a)}>Logout</button>
            </>
    )} else {
        return (
            <>
            <h1>Please Log In!</h1>
            <button onClick={()=>setLog(a=>!a)}>Login</button>
            </>
            )}
    
}

export default LoginControl;

