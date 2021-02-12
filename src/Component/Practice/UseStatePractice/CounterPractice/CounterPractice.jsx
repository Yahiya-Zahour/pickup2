import React,{useState} from 'react';

 const CounterPractice = () => {
    const [addNumber,setAddNumber] = useState(0);
    const handleCounter =()=>{
        setAddNumber(addNumber+1);
    }
    const handleDeleteCounter=()=>{
        setAddNumber( addNumber-1);
    }
    return (
        <div>
            <h1>Increase Number...</h1><button>{addNumber}</button>
            <br/>
            <br/>
            <button  onClick={handleCounter}>Add</button>
            <h1>Decrease Number...</h1>
            <button onClick={handleDeleteCounter}>Delete</button>
            <h1>Increase Number...</h1><button>{addNumber}</button>
            <br/>
            <br/>
            <button  onClick={handleCounter}>Add</button>
            <h1>Decrease Number...</h1>
            <button onClick={handleDeleteCounter}>Delete</button>
            
        </div>
    );
};
export default CounterPractice;
