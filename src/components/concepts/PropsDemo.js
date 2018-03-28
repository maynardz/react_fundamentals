import React from 'react';
import PropTypes from 'prop-types';

export const Projects = [
    { title: 'Beast Creature', author: 'Adam Smith', codepenUrl: 'https://codepen.io/Adamws33/pen/KZQxwJ', date: '01/15/2018' },
    { title: 'Another Beast', author: 'Allison Summers', codepenUrl: 'https://codepen.io/alsummers/pen/vpjXOX', date: '01/15/2018' },
    { title: 'Beast Mode', author: 'Andres Martin', codepenUrl: 'https://codepen.io/dreMartin/pen/eyVLGN', date: '01/15/2018' },
    { title: 'Beasty', author: 'Andrew Gunst', codepenUrl: 'https://codepen.io/agunst99/pen/RxMYOM', date: '01/15/2018' },
]

export default class PropsDemo extends React.Component {
    constructor(props) {
        super(props)
        console.log("PropsDemo class:", props);
        this.state = { projects: Projects };
        console.log("State check:", this.state.projects);
    }
    render() {
        const works = this.state.projects.map((project, i) => {
            console.log("Project", project);
            console.log("Index", i);
            return (
                <div key={i}>
                    <Title title={project.title} />
                    <Author author={project.author} />
                    <CodepenUrl codepenUrl={project.codepenUrl} />
                    <Footer date={project.date} />
                    <hr />
                </div>
            );
        })


        return (
            <div className='main'>
                <div className='mainDiv'>
                    <h1>List of Projects</h1>
                    <div>
                       
                        {works}

                    </div>
                </div>
            </div>
        )
    }
}

class Title extends React.Component {
    constructor(props) {
        super(props)
        console.log("Title props:", props);
    }
    render() {
        return (
            <h3>{this.props.title}</h3>
        )
    }
}

class Author extends React.Component {
    render() {
        return (
            <p>{this.props.author}</p>
        )
    }
}

class CodepenUrl extends React.Component {
    render() {
        return (
            <p>{this.props.codepenUrl}</p>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <p>{this.props.date}</p>
        )
    }
}

PropsDemo.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    codepenUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

PropsDemo.defaultProps = {
    title: 'Creature',
    author: 'Student',
    codepenUrl: 'www.codepen.com',
    date: '03/27/18'
}

