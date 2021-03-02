import React from 'react';

export const FetchingDataFromReduxChild = ({itemCurrent}) => {
    return (
        <div>
        
            <h2>{itemCurrent.name}</h2>
            <img src={itemCurrent.image} alt=""style={{backgroundColor:"red"}}/>
        </div>
    );
};

