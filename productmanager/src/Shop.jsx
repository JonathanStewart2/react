import { useState } from 'react';
//import itemList from './itemList.json'


class Item {
    constructor(name, cost) {
        this._name = name;
        this._cost = cost
    }

}


const Shop = () => {
    const [total, setTotal] = useState(0);
    const [basket, setBasket] = useState([]);

    const addItem = (item, cost) => {
        
        let subItem = {id=item, price=cost}
        setBasket(basket => [...basket, subItem);
        setTotal(total + cost)
    }

    const removeItem = (item) => {
        console.log(basket);
        const index = basket.indexOf(item);
        const newBasket = basket
        newBasket.splice(index, 1);
        setBasket(newBasket);
        console.log(basket);
    }

    return (
        <>
        <div>
            <h6>Items</h6>
            <p>Apple - £0.63 <button onClick={()=>addItem("apple", 0.63)}>Add</button></p>
            <p>Bread - £1.00 <button onClick={()=>addItem("bread", 1.00)}>Add</button></p>
            <p>Milk - £1.29 <button onClick={()=>addItem("milk", 1.29)}>Add</button></p>
        </div>
        <div>
            <h6>Basket:</h6>
            <ul>
                {
                    basket.map(item => (
                    <li>{item}  <button onClick={()=>removeItem({item})}>Remove</button> </li>)
                    )
                }
            </ul>
            
        </div>
        <div>
            <h6>Total:</h6>
            <p>{total}</p>
        </div>
       
        </>
    )
}

export default Shop;