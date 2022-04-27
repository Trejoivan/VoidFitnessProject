import './Card.css';
import { Card} from 'react-bootstrap';

const ListCard = (props) => {
  return (
    <Card >
      <Card.Img variant="top" className="img" />
      <Card.Body className="list-card">
        <Card.Title>{props.list.name.toUpperCase()}</Card.Title>
        <Card.Text>
         Bodypart: {props.list.description}
        </Card.Text>
      </Card.Body>
    </Card>);
};

export default ListCard;
