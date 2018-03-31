import React, { Component } from 'react';
import NytResults from './NytResults'
import styled from 'styled-components';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'e9cee09abba347dfbebaaa72eae64348'

const SubmitButton = styled.button`
    border-radius: 3px;
    padding: 5px;
    background-color: grey;
    color: white;
`;

const FormInput = styled.input`
    padding: 5px;
    border-radius: 3px;
`;

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
            //handleSubmit method
    handleSubmit = (event) => { // Passing in an event to the handleSubmit method
        this.setState({pageNumber: 0}) // If new search happens, page number is reset to zero
        this.fetchResults() // Calling fetchResults function
        event.preventDefault() // Preventing default, or preventing the page from refreshing.
    }
            //handleChange method
    handleChange = (event) => { // Passing in an event to the handleChange method
        this.setState({ // Setting state to ...   >
            [event.target.name]: event.target.value, // the name and the value of the event
        });
    }

    fetchResults = () => {     // calling function fetchResults. Does not need to be binded because it is a fat arrow function.
        let url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}` // Creating url variable based on baseURL, key and page#
        url = this.state.startDate ? url + `&begin_date=${this.state.startDate}` : url // Ternary appending start date to the URL
        url = this.state.endDate ? url + `&end_date=${this.state.endDate}` : url // Ternary appending end date to the URL
        fetch(url) // Fetch request to URL
            .then (
                (response) => response.json() //We call .json() on our fetch request
            ).then((data) => {
                    this.setState({ results: data.response.docs }) //We then grab our data from the API and save the information to the state
                })
            }

    changePageNumber = (e, direction) => { // Taking in an event so we can prevent default or refreshing, as well as a direction. Direction tells us up or down.
        e.preventDefault()
        if (direction === 'down') { // If direction is down, or if we're clicking previous ...  >
            if (this.state.pageNumber > 0) { // this will keep the page number from going below zero
                let newPageNumber = this.state.pageNumber - 1 // Set new page number equal the current state of the page number minus one ... >
                this.setState({ pageNumber: newPageNumber }) // then the pageNumber state is updated to show the change
                this.fetchResults(); // Fetching results of the change
            }
        }
        if (direction === 'up') { // If direction is up, or we're clicking next ... >
            let newPageNumber = this.state.pageNumber + 1 // Set new page number equal to the current state of the page number plus one ... >
            this.setState({ pageNumber: newPageNumber }) // pageNumber state is updated to show the change
            this.fetchResults(); // Fetching results of the change
        }
    }

    render() { //This is what is rendered to the DOM
        return ( 
            <div className='main'>
                <div className='mainDiv'>
                
                        <form onSubmit={e => this.handleSubmit(e)}> {/* The event of submit happens then the handleSubmit method is called, fetching the search results */}
                            <span>Enter a SINGLE search term (required): </span>
                            <FormInput type="text" name="search" onChange={this.handleChange} required /><br /> {/* When text is entered into the search field, the handleChange method is called and sets the state to the value of the event (or what is being entered in the text field) */}
                            <span>Enter a start date: </span>
                            <FormInput type="date" name="startDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br /> {/* Input field for our start date. When data is entered into the input field, the handleChange method is called and sets the state to the value of the event (or what was entered into the input field) */}
                            <span>Enter an end date: </span>
                            <FormInput type="date" name="endDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br /> {/* Input field for our end date. When data is entered into the input field, the handleChange method is called and sets the state to the value of the event (or what was entered into the input field) */}
                            <SubmitButton className="submit">Submit search</SubmitButton> {/* Submit search button */}
                        </form>
                        {
                            this.state.results.length > 0 ? <NytResults results={this.state.results} changePage={this.changePageNumber} /> : <div></div> // Checks if our results length is greater than 0. If so, display our NytResults component. Otherwise, the DOM will display an empty div. We're also setting the prop results equal to this.state.results as well as passing our function changePageNumber to NytResults which will show our change page options if we have results.
                        }
                </div>
            </div>
        )
    }
}
