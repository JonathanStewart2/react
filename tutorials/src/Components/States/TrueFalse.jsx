import { useState } from 'react';

const TrueFalse = () => {

    const [btn, setBtn] = useState(false);

    return (
        <>
        <p>Value: {"" + btn}</p>
        {btn?<p>TRUE</p>:<p>FALSE</p>}
        <button onClick={()=>setBtn(a=>!a)}>CLICK</button>
        </>
    )
}

export default TrueFalse;