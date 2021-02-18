import React, { useState } from 'react';
import { FetchingDataFromReduxChild } from './FetchingDataFromReduxChild';
import { useSelector } from "react-redux";
import { getAllGroups } from '../../../State/selectors/groupSelector';
export const FetchingDataFromReduxparent = () => {
    const selector=useSelector(getAllGroups);
    const [groupDate,setGroupData]=useState(selector);
    return (
        <div>
            {groupDate&&groupDate.map((item)=>{
                return    <FetchingDataFromReduxChild itemCurrent={item}/>

            })
}
            
        </div>
    );
};

