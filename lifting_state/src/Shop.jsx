import { useState } from 'react';
import Items from './Items.jsx';
import Nav from './Nav.jsx';
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Shop = () => {
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState([]);
    const [totalCalc, setTotalCalc] = useState();
    const [page, setPage] = useState('');


    //QUANTITY EXPERIMENTATION - ADDING WORKS, NEED TO COMPLETE REMOVE AND SHOW QUANTITY
    const [quantity, setQuantity] = useState([])


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

    const checkBasket = (array) => {

    }

    const addItem = (item) => {
        // create clones of states and new variables for items
        let newItem = item.item;
        let newCost = item.price;
        let cloneQuantity = quantity;
        let cloneBasket = basket;
        let cloneTotal = total;
        //update Basket
        if (basket.includes(newItem)){
            let index = basket.indexOf(newItem);
            let currentQuantity = quantity[index];
            currentQuantity += 1
            cloneQuantity[index] = currentQuantity;
            setQuantity(cloneQuantity);
        } else {
            //item not in basket so can push "1" to quantity array
            cloneBasket.push(newItem);
            setBasket(cloneBasket);
            cloneQuantity.push(1);
            console.log(quantity);
            console.log(basket);
        }
        // update Totals array
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
        // update quantity array
        let cloneQuantity = quantity;
        let currentQuantity = cloneQuantity[i];
        if (currentQuantity - 1 === 0){
            cloneQuantity.splice(i, 1)
            setQuantity(cloneQuantity);
        } else {
            cloneQuantity[i] = (currentQuantity - 1);
            setQuantity(cloneQuantity);
        }
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