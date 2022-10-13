import { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);
    const history = []

    const changeHandler = (event) => {
        setCount(event.target.value);
        history.push(event.target.value);
        console.log(history);
    }

    return (
        <>
        <h2>COUNTER</h2>
            <p>
            
            <input type="number" value={count} onChange={changeHandler}/>

            <button onClick ={()=>setCount(parseInt(count)+1)}>Increment 1</button>
            <button onClick ={()=>setCount(parseInt(count)-1)}>Decrement 1</button>
            <button onClick ={()=>setCount(parseInt(count)+5)}>Increase 5</button>
            <button onClick ={()=>setCount(parseInt(count)+5)}>Decrement 5</button>
            <button onClick ={()=>setCount(0)}>Reset</button>
            <br/>
            </p>
            <h5>HISTORY</h5>
            <p>{history}</p>
            <div align-center="true">
                {history.map((hist)=> <p>{hist}</p>)}
            </div>
            <ol>
            {history.map((hist)=> <li key={hist}>{hist}</li>)}
            </ol>
            
        </>
    )
}

export default Counter;