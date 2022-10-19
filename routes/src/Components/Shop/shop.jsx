import React, { useState } from 'react';
import Items from './Items';
import Nav from './Nav';

const Shop = () => {
  const [basket, setBasket] = useState([]);
  const [page, setPage] = useState('');
  const [total, setTotal] = useState('');


  const pageHandler = ({ target }) => {
    setPage(target.value);
  };

  const changeQuantity = (idx, change) => {
    const cloneBasket = [...basket];
    cloneBasket[idx].quantity += change;
    if (cloneBasket[idx].quantity === 0) {
      removeItem(idx);
      calculateTotal()
    } else {
      setBasket(cloneBasket);
      calculateTotal()
    }
  };

  const addItem = (item) => {

    let newItem = {
      name: item.item,
      price: item.price,
      quantity: 1
    }

    if (basket.length === 0) {
      setBasket([newItem]);
      return calculateTotal();
    }

    const cloneBasket = [...basket];

    for (let i = 0; i <= cloneBasket.length; i += 1) {
      if (cloneBasket[i].name === newItem.name) {
        cloneBasket[i].quantity += 1;
        setBasket(cloneBasket);
        calculateTotal()
      } else {
        setBasket(basket => [...basket, newItem]);
        calculateTotal()
      }
    }
  };

  const removeItem = (i) => {
    const cloneBasket = [...basket];
    cloneBasket.splice(i, 1);
    setBasket(cloneBasket);
    calculateTotal();
  };

  const calculateTotal = () => {
    let subTotal = 0
    for (let i = 0; i <= basket.length; i += 1) {
      subTotal += basket[i].price * basket[i].quantity
      console.log("SUBTOTAL IS: " + subTotal);
    }
    setTotal(subTotal);
    console.log("TOTAL IS: " + total);
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
                basket
                  .map(({ name, price, quantity }, i) => (
                    <li>
                      {name}
                      <br />
                      Quantity: {quantity}<br />
                      Price: {price * quantity}<br />
                      <br />
                      <button type="button" value={-1} onClick={() => changeQuantity(i, -1)}>-1</button>
                      <button type="button" value={i} onClick={() => removeItem(i)}>Remove</button>
                      <button type="button" value={1} onClick={() => changeQuantity(i, 1)}>+1</button>
                    </li>
                  ))
              }
            </p>
            <p>
              Total: £{total}
            </p>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Shop;
