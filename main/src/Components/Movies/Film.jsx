/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap';

function Film({
  title, year, poster,
}) {
  return (
    <Card>
        <Card.Img variant="top" src={poster} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{`Year: ${year}`}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Film;
