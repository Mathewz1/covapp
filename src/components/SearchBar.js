import React from 'react';
import './../App.css';

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.country = props.value
        this.state = {country: props.value}
    }

    render() {
        return <div id="search-container">
            <input type="text" placeholder="Search country" value={this.state.country} onChange={this.handleChange}/>
            <div id="search-button" onClick={this.handleSearchClick}>Search</div>
        </div>
    }

    handleChange = (e) => {
        this.country = e.target.value
        this.setState({country: e.target.value})
        e.preventDefault()
    }

    handleSearchClick = (e) => {
        this.props.handleSearch(this.country)
    }
}