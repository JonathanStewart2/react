import { useState } from 'react';
import axios from 'axios';

const Converter = () => {
    const [value, setValue] = useState();
    let [btc, setBtc] = useState(0);
    let [history, setHistory] = useState([]);

    const changeHandler = (event) => {
        setValue(parseFloat(event.target.value));

    }

    const convert2BTC = async () => {
        const btcURL = "https://api.coindesk.com/v1/bpi/currentprice.json";
        const response = await axios.get(btcURL)
        const convert = value / response.data.bpi.GBP.rate_float;
        setBtc(convert);
        const newHistory = history;
        const subHistory = [value, convert]
        newHistory.push(subHistory);
        setHistory(newHistory);
    }

    return (
        <>
        <h3>GBP to Bitcoin Converter</h3>
        <input type="number"value={value} onChange={changeHandler}/>
        <button onClick={()=>convert2BTC()}>Convert</button>
        <br/>
        <p>Converts to {btc} Bitcoins!</p>
        <br />
        <h6>History</h6>
        <ul>
            {history.map(output => (
               <li key={history+btc}>£{output[0]} = {output[1]}BTC</li>
          ))}
        </ul>

        </>
    )
}

export default Converter;

