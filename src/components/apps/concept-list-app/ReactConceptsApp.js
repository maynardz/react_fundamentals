// Parent component
import React, { Component } from 'react';
import _ from 'lodash'; // lodash is a JS library which provides utility functions for common tasks
import ConceptList from './ConceptList';
import { concepts } from './concepts';
import NewConcept from './NewConcept';

export default class ReactConceptsApp extends Component {
    constructor() {
        super()
        this.state = { concepts: concepts } // Allows us to incorporate the concepts that we added as our array of data
    }

    toggleConcept(concepts) { // toggleConcept method
        let concept = _.find(this.state.concepts, concepts); // Find compares the state of our concepts ... >
        concept.done = !concept.done; // then set concept.done to the opposite of what it currently is, essentially toggling it
        this.setState({ concepts: this.state.concepts }); // Sets the state of our updated toggled concept to done 
    }

    createConcept(text) { // Create new concept method
        this.state.concepts.push({ // Pushes the new concept to our state ... >
            text,
            done: false
        });
        this.setState({ concepts: this.state.concepts }) // and here we call setState to set our new state
    }

    render() {
        return (
            <div className='main'>
                <div className='mainDiv'>
                    <h1>Concepts List App</h1>
                    <p>Use the list below to toggle concepts that you do or do not understand. Note that this will update when you refresh the page.</p>
                    <hr />    
                    <NewConcept createConcept={this.createConcept.bind(this)} />         
                    <h2>General Concepts</h2>
                    <ConceptList concepts={this.state.concepts} toggle={this.toggleConcept.bind(this)} />   
                </div>
            </div>
        )
    }
}