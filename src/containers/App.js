import React, {useState, useEffect} from 'react';
import './App.css';
import RowList from './RowList.js';


function App() {
  
  const [metaData, setMetaData] = useState([]);


  useEffect(() =>{
    const date = getDateFromThirtyDays();
    fetch(`https://api.github.com/search/repositories?q=created:%3E${date}&sort=stars&order=desc`)
    .then(response => response.json())
    .then((data) => setMetaData(data.items));
  },[])

  const getDateFromThirtyDays = ()=>{
    const today = new Date();
    today.setDate(today.getDate()-30);
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth()+1).padStart(2, '0'); 
    const yyyy = today.getFullYear();
    const thirtyDaysAgo = yyyy+'-'+mm+'-'+dd;
    return thirtyDaysAgo;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <RowList metaData={metaData}/>
      </header>
    </div>
  );
}

export default App;
