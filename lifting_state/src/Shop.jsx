import { useState } from 'react';
import Items from './Items.jsx';

const Shop = () => {
    const [items, setItems] = useState([]);
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState();

    const addItem = ({target}) => {
        let cloneBasket = [...basket, target.value];
        setBasket(cloneBasket);
        console.log(basket);
    }

    const removeItem = (i) => {
        let cloneBasket = [...basket];
        cloneBasket.splice(i, 1);
        setBasket(cloneBasket);
    }
    
    return (
        <>
        <table>
            <tr>
                <th>Items</th>
                <th>Basket</th>
            </tr>
            <tr>
                <td>
                    <Items addItem={addItem}/>
                </td>
                <td>
                {
                    basket.map((item, i) => (
                    <li>{item}  <button value={item} onClick={()=>removeItem(i)}>Remove</button> </li>)
                    )
                }
                </td>
            </tr>
        </table>
        </>
    )
}

export default Shop;