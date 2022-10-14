import { useState } from 'react';

const Miles2Km = () => {
    const [miles, setMiles] = useState(0);
    const [km, setKm] = useState(0);

    const changeMiles = (event) => {
        const newMiles = parseFloat(event.target.value);
        setMiles(newMiles);
        setKm(newMiles * 1.6);
    }

    const changeKm = (event) => {
        const newKm = parseFloat(event.target.value);
        setKm(newKm);
        setMiles(newKm / 1.6);
    }

    return (
        <>
        <label>Miles:</label>
        <input type="number" value={miles} onChange={changeMiles}/>
        <br />
        <label>KM:</label>
        <input type="number" value={km} onChange={changeKm} />
        </>
    )
}

export default Miles2Km;