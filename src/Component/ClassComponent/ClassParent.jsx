import React, { Component } from 'react';
import  {ClassChild}  from "./ClassChild";
export class ClassParent extends Component {
    
    state={
        person:[
            {name:"thor" ,age:35},
            {name:"black panther" ,age:18},
            {name:"monster" ,age:29},
            {name:"thor" ,age:35},
        ],
        };
                  

        changeNameHandler = ()=> {
            this.setState({
                person:[
                    {name:"Bruce", age:26},
                    {name:"clark", age:26},
                    {name:"Bruce", age:26},
                    {name:"clark", age:26},

                ],
             });
         };
    render() {
        return (
            <div>
                <button onClick={this.changeNameHandler}>On Click Event</button>
                <ClassChild name={this.state.person[0].name} age={this.state.person[0].age}/>
                <ClassChild name={this.state.person[1].name} age={this.state.person[1].age}/>
                <ClassChild name={this.state.person[2].name}age={this.state.person[2].age}/>
                <ClassChild name={this.state.person[3].name} age={this.state.person[3].age}/>
            </div>
        );
    }
}

