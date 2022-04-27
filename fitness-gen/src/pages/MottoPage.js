import BodyBuilderApi from '../api/BodyBuilderApi';
import { useState } from 'react';
import { motion } from 'framer-motion';

function MottoPage() {
  const [quote, setQuote] = useState('Hello, need inspiration?');
  const [author, setAuthor] = useState('');
  const [clickable, setClickable] = useState(true);

  const fethMotto = () => {
    if (clickable) {
      console.log("clicked")
      BodyBuilderApi.getData()
        .then((response) => {
          setClickable(false);
          setQuote(response.data.quote);
          setAuthor(response.data.author);
          
        }).then((response) => {
          setTimeout(() => setClickable(true), 9000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (

    <motion.div onClick={fethMotto} className="motto-page"
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: .7 } }}>
    
      <h1 className="motto-text">{quote}</h1>
      <h3 className="motto-text">-{author}</h3>
 
    </motion.div >);
}

export default MottoPage;
