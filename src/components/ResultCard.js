import React from 'react';
import './../App.css'

function ResultCard(props) {

    function getNumStringShort(amount) {
        
            if (amount >= 1000000000)
                return String.format("%.1f", amount/1000000000) + "B";

            else if (amount >= 1000000)
                return String.format("%.1f", amount/1000000) + "M"

            else if (amount >= 1000)
                return String.format("%.1f", amount/1000) + "K"
            else return amount
        
    }

    return <div className="result-card">
        <span>{props.country}</span> <br />
<strong>{getNumStringShort(props.total)}</strong> <br/>
<label>{props.label}</label> 
<br /><qoute>{'-'+(props.new? props.new:0)+' New'}</qoute>
    </div>
}

export default ResultCard