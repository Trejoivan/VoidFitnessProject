import { Carousel } from 'react-bootstrap';
import './Carousel.css';

function MyCarousel() {
  return (
  
  <Carousel className='carousel'>
     <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://wallpaper.dog/large/5450398.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className="slide-caption">Dare to enter the Void?</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://themusclephd.com/wp-content/uploads/2020/08/Crossfit-Coach-scaled.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className="slide-caption">Plan Your workouts</h3>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/two-friends-exercising-bench-press-in-gym-royalty-free-image-1579323512.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3 className="slide-caption">Share your planned workouts to your friends or the public through our application.</h3>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://sport360.com/wp-content/uploads/2016/06/courageous-enough-take-risks-accomplish-muhammad-ali-quotes-sport360.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3 className="slide-caption">Get motovational Inspiration throught our "Quick Motivation" feature</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.muscleandfitness.com/wp-content/uploads/2020/01/DEADLIFT.jpg?quality=86&strip=all"
        alt="fourthslide"
      />

      <Carousel.Caption>
        <h3 className="slide-caption">Earn Those Donuts!</h3>
      </Carousel.Caption>
    </Carousel.Item>

   
  </Carousel>);
}

export default MyCarousel;