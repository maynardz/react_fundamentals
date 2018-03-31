// This component will render every concept
import React from 'react';
//We need this child component to run a function, so we pass it in props to display the concepts for us

const Concept = ({ concept, toggle }) => { // Passing const Concept a concept from our sorted list, and a method to change whether or not the list item is clicked (toggle)
    const done = (event) => {
        event.preventDefault(); // Prevents page from re-rendering
        toggle(concept);
        console.log("Props:", concept, toggle);
    }

    return (
        <li>
            {concept.done ? (<del>{concept.text}</del>) : (concept.text)} <a href="" onClick={done}>V</a> { /* If concept.done is true, it will be shown as crossed off. Otherwise it will just be shown as the text. We then have a button that will trigger when clicked, firing off done */}
        </li>
    )

}

export default Concept;