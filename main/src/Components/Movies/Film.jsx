/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap';

function Film({
  title, year, poster,
}) {
  return (
      <Card border="primary" style={{ width: '10rem' }}>
        <Card.Img variant="top" src={poster} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{`Year: ${year}`}</Card.Text>
        </Card.Body>
      </Card>
  );
}

export default Film;
