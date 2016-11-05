import React, { Component } from 'react';

export class App extends Component {
    
    render() {
        console.log(this.state, this.props);
        return (
            <div>{this.props.children}</div>
        )
    }
}