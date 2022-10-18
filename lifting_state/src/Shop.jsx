import { useState } from 'react';
import Items from './Items.jsx';
import Nav from './Nav.jsx';

const Shop = () => {
    const [items, setItems] = useState([]);
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState();
    const [page, setPage] = useState('');

    const pageHandler = ({target}) => {
        console.log(target.value);
        setPage(target.value);
    }

    const addItem = ({target}) => {
        let cloneBasket = [...basket, target.value];
        setBasket(cloneBasket);
    }

    const removeItem = (i) => {
        let cloneBasket = [...basket];
        cloneBasket.splice(i, 1);
        setBasket(cloneBasket);
    }
    
    return (
        <>
        <Nav pageHandler={pageHandler} />
        <table>
            <tr>
                <th>Items</th>
                <th>Basket</th>
            </tr>
            <tr>
                <td>
                    <Items page={page} addItem={addItem}/>
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