import MyCarousel from '../Components/Carousel/Carousel';
import StepSection from '../Components/Step/Step';
import '../App.css';


import { motion } from 'framer-motion';

function HomePage(props) {
  return (
    <motion.div className="data"
    inital={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: .7 } }}>
        <div className='App'>
          <MyCarousel />
          <StepSection />
        </div>
        </motion.div>
  );
}

export default HomePage;
