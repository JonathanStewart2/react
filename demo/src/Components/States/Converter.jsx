import { useState } from 'react';
import axios from 'axios';

const Converter = () => {
    const [value, setValue] = useState(0);
    let [btc, setBtc] = useState(0);

    const changeHandler = (event) => {
        setValue(parseFloat(event.target.value));
    }

    const convert2BTC = async () => {
        const btcURL = "https://api.coindesk.com/v1/bpi/currentprice.json";
        const response = await axios.get(btcURL)

        setBtc(value / response.data.bpi.GBP.rate_float);
    }

    return (
        <>
        <h3>GBP to Bitcoin Converter</h3>
        <input type="number"value={value} onChange={changeHandler}/>
        <button onClick={()=>convert2BTC()}>Convert</button>
        <br/>
        <p>{btc}</p>
        </>
    )
}

export default Converter;

