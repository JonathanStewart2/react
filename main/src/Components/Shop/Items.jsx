import chaos from './chaosList.json';
import order from './orderList.json';
import destruction from './destructionList.json';
import death from './deathList.json';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Items({ page, addItem }) {
  if (page === 'Chaos') {
    return (
      <>
        {
          chaos.map((item) => (
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.item}</Card.Title>
                <Card.Text>£{item.price}</Card.Text>
                <Button variant="primary" type="button" value={item} onClick={() => addItem(item)}>Buy</Button>
              </Card.Body>
            </Card >
          ))
        }
      </>

    );
  } if (page === 'Death') {
    return (
      <ul>
        {
          death.map((item) => (
            <li>
              {item.item}
              £
              {item.price}
              <button type="button" value={item} onClick={() => addItem(item)}>Buy</button>
            </li>
          ))
        }
      </ul>
    );
  }
  if (page === 'Order') {
    return (
      <ul>
        {
          order.map((item) => (
            <li>
              {item.item}
              {' '}
              £
              {item.price}
              <button type="button" value={item} onClick={() => addItem(item)}>Buy</button>
            </li>
          ))
        }
      </ul>
    );
  } if (page === 'Destruction') {
    return (
      <ul>
        {
          destruction.map((item) => (
            <li>
              {item.item}
              {' '}
              £
              {item.price}
              <button type="button" value={item} onClick={() => addItem(item)}>Buy</button>
            </li>
          ))
        }
      </ul>
    );
  }
  return (
    <p>Please select the army to choose from.</p>
  );
}

export default Items;
