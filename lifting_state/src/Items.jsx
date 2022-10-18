const Items = ({page, addItem}) => {

    if (page = "Chaos") {
    return (
        <ul>
            <li>Archaon <button value="Archaon" onClick={addItem}>Buy</button></li>
            <li>Cado Ezechiar<button value="Cado Ezechiar" onClick={addItem}>Buy</button></li>
            <li>Radukar the Wolf <button value="Radukar the Wolf" onClick={addItem}>Buy</button></li>
            <li>Mannfred<button value="Mannfred" onClick={addItem}>Buy</button></li>

        </ul>
    )
    } else if (page == "Death") {
        return (
            <ul>
              <li>High Gladiatrix <button value="High Gladiatrix" onClick={addItem}>Buy</button></li>
              <li>Nagash <button value="Nagash" onClick={addItem}>Buy</button></li>
            </ul>
        )
    } else {
        return<>
            <p>Please select the army to choose from.</p>
        </>
    }
}

export default Items;