
import MyCard from '../Components/Card/Card';
import MyCarousel from '../Components/Carousel/Carousel';
import StepSection from '../Components/Step/Step';
import '../App.css';
import IntroSection from '../Components/Hero/IntroSection';

function App(props) {
  return (
        <div className="data">
          {props.responseData && props.responseData.map(data => {
            return <MyCard data={data} key={data.id} />
          }) || <div className='App'><IntroSection /><MyCarousel />
      <StepSection /></div>}</div>
      
  );
}

export default App;