import './Card.css';
import { Card  } from 'react-bootstrap';
import DeleteWorkout from '../DeleteWorkoutData/DeleteWorkout'

const SmallCard = (props) => {
  return (
    <Card >
      <Card.Img variant="top" className="img" src={props.data.gifUrl} />
      <Card.Body className="card"> 
      <Card.Title>{props.data.workout}</Card.Title>
        <Card.Text>
         Bodypart: {props.data.bodyPart }
        </Card.Text>
        <Card.Text>
         Targets: {props.data.target } 
        </Card.Text>
        <DeleteWorkout removeWorkout={ props.removeWorkout } workoutID={props.data.id} />
      </Card.Body>
    </Card>);
};

export default SmallCard;

