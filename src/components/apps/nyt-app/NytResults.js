import React from 'react';
import styled from 'styled-components';

const ArticleCard = styled.div`
    border: 1px solid grey;
    background-color: lightgray;
    padding: 10px;
    margin: 5px;
`

const NytResults = (props) => { // Created a functional component named NytResults and passed in props, so we can access the results and information from our parent component
    return (
        <div>
            {props.results.map(result => { // We're taking props.results and calling map on it, so it is mapping over each result.
                return (
                    <ArticleCard key={result._id}> {/* Unique keys are required when creating multiples of the same item so we are giving each result an id */}
                        <h2>{result.headline.main}</h2> {/* Putting the articles main headline in an h2 tag */ }
                        {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''} {/*  if results of the multimedia is greater than one, it will display the second article image */}
                        <p>
                            {result.snippet} {/* Displays short summary of article */}
                            <br />
                            {result.keywords.length > 0 ? ' Keywords: ' : ''} {/* ternary to check if there are keywords. If so, we display 'Keywords:' */}
                        </p>
                        <ul>
                            {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)} {/* If there are keywords, this will map over the results and display them in a list */}
                        </ul>
                        <a href={result.web_url}><button>Read It</button></a> {/* Link to the url of the article and a button with the flavor text of read it to route you to the article */}
                    </ArticleCard>
                )
            })}
            <div>
                <button onClick={e => props.changePage(e, 'down')}>Previous 10</button> {/* Calling the change page function defined in the parent and passing the corresponding direction - down */}
                <button onCLick={e => props.changePage(e, 'up')}>Next 10</button> {/* Same as above except direction is up */}
            </div>
        </div>
    )
}

export default NytResults;