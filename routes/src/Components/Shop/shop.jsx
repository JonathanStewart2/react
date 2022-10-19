import React, { useState } from 'react';
import Items from './Items';
import Nav from './Nav';

function Shop() {
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState([]);
  const [totalCalc, setTotalCalc] = useState(0);
  const [page, setPage] = useState('');

  // QUANTITY EXPERIMENTATION - ADDING WORKS, NEED TO COMPLETE REMOVE AND SHOW QUANTITY
  const [quantity, setQuantity] = useState([]);

  const pageHandler = ({ target }) => {
    console.log(target.value);
    setPage(target.value);
  };

  const sumArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
      sum += array[i];
    }
    return sum;
  };

  const addItem = (item) => {
    // create clones of states and new variables for items
    const newItem = item.item;
    const newCost = item.price;
    const cloneQuantity = quantity;
    const cloneBasket = basket;
    const cloneTotal = total;
    // update Basket
    if (basket.includes(newItem)) {
      const index = basket.indexOf(newItem);
      let currentQuantity = quantity[index];
      currentQuantity += 1;
      cloneQuantity[index] = currentQuantity;
      setQuantity(cloneQuantity);
      // update the totals array
      const newTotal = cloneTotal[index] + newCost;
      cloneTotal[index] = newTotal;
      setTotal(cloneTotal);
    } else {
      // item not in basket so can push item to basket
      cloneBasket.push(newItem);
      setBasket(cloneBasket);
      // item not in basket so can push "1" to quantity array
      cloneQuantity.push(1);
      setQuantity(cloneQuantity);
      // update totals array
      cloneTotal.push(newCost);
      setTotal(cloneTotal);
    }
    // update calculated total
    setTotalCalc(sumArray(cloneTotal));
    console.log(`AFTER ADD basket is ${basket}`);
    console.log(`AFTER ADD total is ${total}`);
    console.log(`AFTER ADD quantity is ${quantity}`);
    console.log(`AFTER ADD totalcal is ${totalCalc}`);
  };

  const removeItem = (i) => {
    const cloneBasket = basket;
    const cloneQuantity = quantity;
    const cloneTotal = total;
    // if quantity == 1 then remove item from basket, quantity and totals
    if (quantity[i] === 1) {
      // remove item from basket
      cloneBasket.splice(i, 1);
      setBasket(cloneBasket);
      // remove item from quantity array
      cloneQuantity.splice(i, 1);
      setQuantity(cloneQuantity);
      // remove item from totals array
      cloneTotal.splice(i, 1);
      setQuantity(cloneTotal);
    } else {
      // reduce amounts by 1 in quantity
      const currentQuantity = cloneQuantity[i];
      cloneQuantity[i] = (currentQuantity - 1);
      setQuantity(cloneQuantity);
      // reduce totals arrays
      const currentTotal = cloneTotal[i];
      cloneTotal[i] = (currentTotal - (currentTotal / currentQuantity));
      setQuantity(cloneTotal);
    }
    // recalculate the total
    const sumOfTotal = sumArray(cloneTotal);
    setTotalCalc(sumOfTotal);
    console.log(`AFTER REMOVAL basket is ${basket}`);
    console.log(`AFTER REMOVAL total is ${total}`);
    console.log(`AFTER REMOVAL quantity is ${quantity}`);
    console.log(`AFTER REMOVAL totalcalc is ${totalCalc}`);
  };

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
                      <li>
                        {item}
                        {' '}
                        <br />
                        Quantity:
                        {' '}
                        {quantity[i]}
                        {' '}
                        <button type="button" value={item} onClick={() => removeItem(i)}>Remove</button>
                        {' '}

                      </li>
                    ))
                     }
            </p>
            <p>
              Total: £
              {totalCalc}
            </p>
          </td>
        </tr>
      </table>
    </>
  );
}

export default Shop;
