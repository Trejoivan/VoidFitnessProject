import MyCard from '../Components/Card/Card';
import '../App.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function ResultsPage(props) {
  const [pageNum, setPageNum] = useState(1);
  const amountOfPages = Math.ceil(props.responseData.length / 20);
  
  
  const renderPages = () => {
    if (props.responseData.length < 21) {
      return props.responseData.map(data => {
        return <MyCard data={data} key={data.id} />;
      });
    }
    else {
      let allData = [];
      props.responseData.forEach(data => { allData.push(data); });
      let currentPage = (pageNum === 1 ? 0 : pageNum * 20)
      let endOfPage = ((pageNum * 20) + 21)
      console.log(currentPage, endOfPage)

      return allData.slice(currentPage, endOfPage).map(data => {
        return <MyCard data={data} key={data.id} />;
      });
    }
  };

  

  useEffect(() => {
    renderPages();
  }, [pageNum])


  const createButtons = () => {
    if (amountOfPages > 1) {
      let elm = [];
      for (let i = 1; i < amountOfPages; i++) {
        elm.push(<button key={`pageKey${i}`} onClick={() => setPageNum(i)} className={i == pageNum ? "page-btns-active" : "page-btns"}>{i}</button>);
      }
      return elm;
    }
    else {
      return ''
    }
  };


  return (<motion.div 
  inital={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0, transition: { duration: .7 } }}>
  <div className="pageNumTitle">Click to Navigate Your Search Results</div>
  <div className="page-btn-container">{createButtons()}</div>
    <div className="resultdata">
      {renderPages()}
    </div>
    </motion.div >
  );
}

export default ResultsPage;