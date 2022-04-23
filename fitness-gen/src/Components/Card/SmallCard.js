import './Card.css';
import { Card  } from 'react-bootstrap';

const SmallCard = (props) => {
  
  return (
    <Card >
      <Card.Img variant="top" className="img" src={props.data.gifUrl} />
      <Card.Body className="card">
        <Card.Title>
          {props.data.name.toUpperCase()}</Card.Title>
          <Card.Title>
          {props.data.bodyPart.toUpperCase()}</Card.Title>
      </Card.Body>
    </Card>);
};

export default SmallCard;

