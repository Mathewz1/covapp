import React from 'react';
import ResultCard from './ResultCard';

export default class ResultsContainer extends React.Component {

    render() {
        let data = this.props.data

        return <div id="results-container">
            <ResultCard label="Cases" country={data.Country} new={data.NewConfirmed} total={data.TotalConfirmed}/>
            <ResultCard label="Deaths" country={data.Country} new={data.NewDeaths} total={data.TotalDeaths}/>
            <ResultCard label="Recovered" country={data.Country} new={data.NewRecovered} total={data.TotalRecovered}/>
            <ResultCard label="Active" country={data.Country} new={data.NewConfirmed} total={data.TotalConfirmed-data.TotalDeaths-data.TotalRecovered}/>
        </div>
    }
}