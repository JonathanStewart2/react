import { useState } from 'react';
import axios from 'axios';

const Converter = () => {
    const [value, setValue] = useState(0)
    let currentBTC = 0

    const changeHandler = (event) => {
        setValue(event.target.value);
    }

    const convert2BTC = () => {
        const btcURL = "https://api.coindesk.com/v1/bpi/currentprice.json";
        axios.get(btcURL)
            .then(response => {
                currentBTC = parseInt(response.data.bpi.GBP.rate);
                //console.log(response.data.bpi.GBP.rate);
                console.log(currentBTC);
                console.log(currentBTC/value);
            })
            .catch(err => console.error(err))
        return currentBTC/value;
    }

    return (
        <>
        <h3>GBP to Bitcoin Converter</h3>
        <input type="number"value={value} onChange={changeHandler}/>
        <button onClick={()=>setValue(convert2BTC())}>Convert</button>
        <br/>
        <p>{currentBTC}</p>
        </>
    )
}

export default Converter;

