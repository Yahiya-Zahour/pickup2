import React, { Component } from 'react';
import  {ClassChild}  from "./ClassChild";
export class ClassParent extends Component {
    state={
        person:[
            {name:"thor"},
            {name:"black panther" ,age:18},
            {name:"monster" ,age:29},
        ],
        };
    render() {
        return (
            <div>
                <ClassChild name="zahoor" age="20"/>
                <ClassChild name="yahiya" age="17"/>
                <ClassChild name="muhammad"age="19"/>
                <ClassChild name={this.state.person[2].name} age={this.state.person[2].age}/>
            </div>
        );
    }
}

