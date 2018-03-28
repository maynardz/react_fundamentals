import React, { Component } from 'react';

export default class NytApp extends Component {
    constructor(props) {
        super(props)
        this.state = {              
            search: '',
            startDate: '',
            endDate: '',       // Stored data in our state to send to the API, as well as capturing results and page number from API. 
            pageNumber: 0,
            results: []
        };
    }

    fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}`
        url = this.state.startDate ? url + `&begin_date=${this.state.startDate}` : url
        url = this.state.endDate ? url + `&end_date=${this.state.endDate}` : url
        fetch(url)
            .then (
                (response) => response.json()
            ).then //
    }

    render() {
        return (
            <div className='main'>
                <div className='mainDiv'>
                </div>
            </div>
        )
    }
}

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'e9cee09abba347dfbebaaa72eae64348'