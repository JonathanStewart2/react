const Items = ({page, addItem}) => {

    if (page === "Chaos") {
    return (
        <ul>
            <li>Archaon <button value="Archaon" onClick={addItem}>Buy</button></li>
            <li>Darkoath<button value="Darkoath" onClick={addItem}>Buy</button></li>
            <li>Be'lakor <button value="Be'lakor" onClick={addItem}>Buy</button></li>
            
        </ul>
    )
    } else if (page === "Death") {
        return (
            <ul>
              <li>Nagash <button value="Nagash" onClick={addItem}>Buy</button></li>
              <li>Mannfred<button value="Mannfred" onClick={addItem}>Buy</button></li>
              <li>Arkhan<button value="Arkhan" onClick={addItem}>Buy</button></li>
            </ul>
        )
    }
    else if (page === "Order") {
        return (
            <ul>
                <li>Bastian Carthalos <button value="Bastian Carthalos " onClick={addItem}>Buy</button></li>
                <li>Knight Relictor<button value="Knight Relictor" onClick={addItem}>Buy</button></li>
                <li>Naeve Blacktalon<button value="Naeve Blacktalon" onClick={addItem}>Buy</button></li>
            </ul>
            )
    } else if (page === "Destruction") {
        return (
            <ul>
                <li>Kragnos <button value="Kragnos" onClick={addItem}>Buy</button></li>
                <li>Wardokk<button value="Wardokk" onClick={addItem}>Buy</button></li>
                <li>Loonboss<button value="Loonboss" onClick={addItem}>Buy</button></li>
            </ul>
        )
    }else {
        return<>
            <p>Please select the army to choose from.</p>
        </>
    }
}

export default Items;