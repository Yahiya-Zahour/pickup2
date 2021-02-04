import React, { Component } from 'react';

export class ClassChild extends Component {
   

    render() {
        return (
            <div>
                
                <h1>my name is {this.props.name} i am {this.props.age} year old!!!</h1>
            </div>
        );
    }
}

