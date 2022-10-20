import chaos from './chaosList.json';
import order from './orderList.json';
import destruction from './destructionList.json';
import death from './deathList.json';

const Items = ({ page, addItem }) => {


    if (page === "Chaos") {
        return (
            <>
                <ul>
                    {
                        chaos.map((item) => (
                            <li>{item.item} £{item.price}
                                <button value={item} onClick={() => addItem(item)}>Buy</button>
                                <br />
                                <img src={item.image} alt={item.item}/>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    } else if (page === "Death") {
        return (
            <>
                <ul>
                    {
                        death.map((item) => (
                            <li>{item.item} £{item.price}
                                <button value={item} onClick={() => addItem(item)}>Buy</button>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }
    else if (page === "Order") {
        return (
            <>
                <ul>
                    {
                        order.map((item) => (
                            <li>{item.item} £{item.price}
                                <button value={item} onClick={() => addItem(item)}>Buy</button>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    } else if (page === "Destruction") {
        return (
            <>
                <ul>
                    {
                        destruction.map((item) => (
                            <li>{item.item} £{item.price}
                                <button value={item} onClick={() => addItem(item)}>Buy</button>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    } else {
        return (
            <>
                <p>Please select the army to choose from.</p>
            </>
        )
    }
}

export default Items;