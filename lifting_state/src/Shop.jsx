import { useState } from 'react';
import Items from './Items.jsx';
import Nav from './Nav.jsx';
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Shop = () => {
    const [items, setItems] = useState([]);
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState([]);
    const [totalCalc, setTotalCalc] = useState();
    const [page, setPage] = useState('');

    const pageHandler = ({target}) => {
        console.log(target.value);
        setPage(target.value);
    }

    const sumArray = (array) => {
        let sum = 0;
        for (let i=0; i<array.length; i++){
            sum += array[i];
        }
        return sum 
    };

    const addItem = (item) => {
        //update Basket
        let newItem = item.item;
        let cloneBasket = [...basket];
        cloneBasket.push(newItem);
        setBasket(cloneBasket);
        // update Totals array
        let newCost = item.price;
        let cloneTotal = total;
        cloneTotal.push(newCost);
        setTotal(cloneTotal);
        //update calculated total
        setTotalCalc(sumArray(total));
    }


    const removeItem = (i) => {
        //remove item from basket
        let cloneBasket = [...basket];
        cloneBasket.splice(i, 1);
        setBasket(cloneBasket);
        //remove cost of item from total array
        let cloneTotal = total;
        cloneTotal.splice(i, 1);
        setTotal(cloneTotal);
        // recalculate the total
        setTotalCalc(sumArray(total));
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
                    <Items page={page} addItem={addItem} />
                </td>
                <td>
                    <p>
                    {
                    basket.map((item, i) => (
                    <li>{item}  <button value={item} onClick={()=>removeItem(i)}>Remove</button> </li>)
                     )
                     }
                    </p>
                    <p>
                        Total: £{totalCalc}
                    </p>
                </td>
            </tr>
        </table>
        </>
    )
}

export default Shop;