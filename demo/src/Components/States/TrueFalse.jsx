import { useState } from 'react';

const TrueFalse = () => {

    const [btn, setBtn] = useState(false);

    return (
        <>
        <p>Value: {"" + btn}</p>
        <button onClick={()=>setBtn(a=>!a)}>CLICK</button>
        </>
    )
}

export default TrueFalse;