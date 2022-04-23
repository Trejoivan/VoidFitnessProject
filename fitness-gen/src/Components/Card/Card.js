import './Card.css';
import { Card, Button } from 'react-bootstrap';
import AddWorkouts from '../AddWorkoutData/AddWorkouts'


const MyCard = (props) => {
  return (
    <Card >
      <Card.Img variant="top" className="img" src={props.data.gifUrl} />
      <Card.Body className="card">
        <Card.Title>{props.data.name.toUpperCase()}</Card.Title>
        <Card.Text>
         Bodypart: {props.data.bodyPart.toUpperCase() }
        </Card.Text>
        <Card.Text>
         Equipment: {props.data.equipment.toUpperCase()  }
        </Card.Text>
        <Card.Text>
         Targets: {props.data.target.toUpperCase() }
        </Card.Text>
        <AddWorkouts 
        name={props.data.name} 
        bodyPart={props.data.bodyPart}
        equipment={props.data.equipment}
        target={props.data.target}
        gifUrl={props.data.gifUrl}
          />
        {/* <Button variant="primary" onClick={() => console.log(props.data)}>Save To The Void</Button> */}
      </Card.Body>
    </Card>);
};

export default MyCard;

