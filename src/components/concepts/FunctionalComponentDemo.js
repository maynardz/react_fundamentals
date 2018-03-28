import React from 'react';

import {
    Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

const FunctionalComponentDemo = function () {
    return (
        <Container className ='main'>
            <Row>
                <Col xs='12'>
                    <h1>Functional Component</h1>
                    <p>Functional components allow you to render inforamtion to the web page without having to use or change state.</p>
                    <hr></hr>
                    <dl>
                        <dt>Presentational</dt>
                        <dd>Often used for simply rendering a small chunk of code to the DOM.</dd>
                        <dt>No 'this' keyword</dt>
                        <dd>Unlike class components, functional ones don't use 'this'.</dd>
                        <dt>No state</dt>
                        <dd>These are 'dumb' components for UI.</dd>
                        <dt>return()</dt>
                        <dd>Must return a single element</dd>
                        <dt>Fat arrow functions</dt>
                        <dd>The fat arrow => is used to define anonymous functions</dd>
                    </dl>
                    <hr></hr>
                </Col>
            </Row>       
            <h1>Challenge</h1>
            <Row>
                <Col md='6'>
                    <HelloWorldFatArrow className="logo" />
                </Col>
                <Col md='6'>
                    <HelloWorld />
                </Col>
            </Row>            
        </Container>
    );
};

export default FunctionalComponentDemo;

const HelloWorld = function () {
    return (
        <div>
            <Card>
            <img width="100%" height="280px" src="https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg" alt="Card cap" />
                <CardBody>
                    <CardTitle>Regular Ole Function</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText>const HelloWorld = function().</CardText>
                    <Button>Go somewhere, yo!</Button>
                </CardBody>
            </Card>
        </div>            
    )
}

const HelloWorldFatArrow = () =>
    <div>
        <Card>
            <img width="100%" height="280px" src="https://i.ytimg.com/vi/_pfXEv9cFGE/maxresdefault.jpg" alt="Card cap" />
            <CardBody>
                <CardTitle>Fat Arrow</CardTitle>
                <CardSubtitle>A JS Library</CardSubtitle>
                <CardText>const HelloWorld = () =>.</CardText>
                <Button>Go somewhere, yo!</Button>
            </CardBody>
        </Card>
    </div>