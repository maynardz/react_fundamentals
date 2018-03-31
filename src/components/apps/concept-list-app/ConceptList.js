// Component used for displaying all of our concepts
import React from 'react';
import _ from 'lodash';
import Concept from './Concept';
// List components are a common pattern in react. This is where you do any calculations to the entire list and then render each individual part of the list through a child component, usually with a map or loop.
const ConceptList = ({ concepts, toggle }) => {
    let conceptsSorted = _.sortBy(concepts, 'done'); // Sorting each concept by whether or not the task is done
    let items = conceptsSorted.map((concept) => // Creating a variable named items and setting it equal to our sorted concepts.
        <Concept concept={concept} key={concept.text} toggle={toggle} /> // 
    )

    return (
        <ul>
            {items} {/* Calling items variable in our render to display our concepts */}
        </ul>
    )

}

export default ConceptList