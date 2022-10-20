import { useState } from 'react';
import axios from 'axios';
import Logo from './btclogo.png'

function Converter() {
  const [value, setValue] = useState(0);
  const [btc, setBtc] = useState(0);

  const changeHandler = (event) => {
    setValue(parseFloat(event.target.value));
  };

  const convert2BTC = async () => {
    const btcURL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    const response = await axios.get(btcURL);
    setBtc(value / response.data.bpi.GBP.rate_float);
  };

  return (
    <>
      <h3>GBP to Bitcoin Converter</h3>
      <input type="number" value={value} onChange={changeHandler} />
      <button type="button" onClick={() => convert2BTC()}>Convert</button>
      <br />
      <p>
        Converts to 
        {btc}
        {' '}
        Bitcoins!
      </p>
      <img src={Logo} width={250} height={250}></img>
    </>
  );
}

export default Converter;
