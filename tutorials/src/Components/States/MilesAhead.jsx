import { useState } from 'react';

const MilesAhead = () => {
    const [steps, setSteps] = useState(0);

    const increment = () => {
        setSteps(prev => prev + 1);
    }

    return (
        <>
            <p>You have taken {steps} steps today!</p>
            <br/>
            <button onClick={increment}>I took another step </button>
        </>

    )
}

export default MilesAhead;