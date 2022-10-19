import { useState } from 'react';
import Items from './Items.jsx';
import Nav from './Nav.jsx';
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Shop = () => {
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState([]);
    const [totalCalc, setTotalCalc] = useState(0);
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
            //update the totals array
            let newTotal = cloneTotal[index] + newCost;
            cloneTotal[index] = newTotal;
            setTotal(cloneTotal);

        } else {
            //item not in basket so can push item to basket
            cloneBasket.push(newItem);
            setBasket(cloneBasket);
            //item not in basket so can push "1" to quantity array
            cloneQuantity.push(1);
            setQuantity(cloneQuantity);
            // update totals array
            cloneTotal.push(newCost);
            setTotal(cloneTotal);
        }
        //update calculated total
        setTotalCalc(sumArray(cloneTotal));
        console.log("AFTER ADD basket is " + basket);
        console.log("AFTER ADD total is " + total);
        console.log("AFTER ADD quantity is " + quantity);
        console.log("AFTER ADD totalcal is " + totalCalc);
    }



    const removeItem = (i) => {
        let cloneBasket = basket;
        let cloneQuantity = quantity;
        let cloneTotal = total;
        // if quantity == 1 then remove item from basket, quantity and totals
        if (quantity[i] === 1){
            //remove item from basket
            cloneBasket.splice(i, 1);
            setBasket(cloneBasket);
            // remove item from quantity array
            cloneQuantity.splice(i, 1);
            setQuantity(cloneQuantity);
            // remove item from totals array
            cloneTotal.splice(i, 1);
            setQuantity(cloneTotal);
        } else {
            // reduce amounts by 1 in quantity and reduce totals arrays
            let currentQuantity = cloneQuantity[i];
            cloneQuantity[i] = (currentQuantity - 1);
            setQuantity(cloneQuantity);
            let currentTotal = cloneTotal[i];
            cloneTotal[i] = (currentTotal - (currentTotal/currentQuantity));
            setQuantity(cloneTotal);
        }
        // recalculate the total
        let sumOfTotal = sumArray(cloneTotal);
        setTotalCalc(sumOfTotal);
        console.log("AFTER REMOVAL basket is " + basket);
        console.log("AFTER REMOVAL total is " + total);
        console.log("AFTER REMOVAL quantity is " + quantity);
        console.log("AFTER REMOVAL totalcalc is " + totalCalc);
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
                    <li>{item} <br />
                    Quantity: {quantity[i]} <button value={item} onClick={()=>removeItem(i)}>Remove</button> </li>)
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