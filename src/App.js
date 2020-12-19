import './App.css';
import SearchBar from './components/SearchBar';
import React, {useState} from 'react';
import initialize from './fetch'
import ResultsContainer from './components/ResultsContainer';

function App() {
  const [countries, setCountries] = useState({})
  const [summaries, setSummaries] = useState([])
  const [global, setGlobal] = useState({})
  const [current, setCurrent] = useState({
            Country: "Unknown",
            NewConfirmed: 0,
            NewDeaths: 0,
            NewRecovered: 0,
            TotalConfirmed: 0,
            TotalDeaths: 0,
            TotalRecovered: 0
  })

  window.onload = (ev) => {
    initialize((c, s, g) => {
      setCountries(c)
      setSummaries(s)
      setGlobal(g)
  
      setCurrent(global)
    }, (error) => {console.log("Failed to fetch data")})
  }

  function handleSearchCountry(newCountry) {
    console.log(newCountry)
    
    let slug = countries[newCountry.toUpperCase()];
        if (slug !== undefined) {
          setCurrent(summaries.find((ele) => {return ele.Slug === slug}))
        }
        else {
            let sugg = summaries.find((ele) => { return ele.Country.toUpperCase().includes(newCountry.toUpperCase())});
        
            alert(`Country not found!\n\n${sugg? ("Did you mean " + sugg.Country + "?") : ""}`);
        }
  }

  return (
    <div className="App">

      <header id="title">
        <h1>Covid-19 Statistics</h1>
      </header>

      <SearchBar value="" handleSearch={handleSearchCountry}></SearchBar>
      <ResultsContainer data={current}/>
      
    </div>
  );
}

export default App;
