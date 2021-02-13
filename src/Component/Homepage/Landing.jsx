import React from 'react';
import {MainHeader} from "../HeaderSection/MainBodyHeader/MainHeader";
import { ClassParent } from '../ClassComponent/ClassParent';
import CounterPractice from '../Practice/UseStatePractice/CounterPractice/CounterPractice';
import { FetchingDataFromJsonChild } from '../Practices/FetchingDataFromJson/FetchingDataFromJsonChild';
import { FetchingDataFromJsonParent } from '../Practices/FetchingDataFromJson/FetchingDataFromJsonParent';
// import {ClassComponent} from './ClassPairent';
// import {ClassPairent} from "./ClassComponent/ClassPairent";


 export const Landing = () => {
    return (
    <div>
          {/* <ClassPairent /> */}
          {/* <ClassParent/> */}
          {/* <CounterPractice/> */}
          {/* <CounterPractice.css/> */}
          {/* <MainHeader/> */}
          {/* <FetchingDataFromJsonChild/> */}
          <FetchingDataFromJsonParent/>
            
        </div>
        );
};
