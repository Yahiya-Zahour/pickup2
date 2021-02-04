import React, { Component } from 'react';
import  {ClassChild}  from "./ClassChild";
export class ClassParent extends Component {
    render() {
        return (
            <div>
                <ClassChild name="zahoor" age="20"/>
                <ClassChild name="yahiya" age="17"/>
                <ClassChild name="muhammad"age="19"/>
            </div>
        );
    }
}

