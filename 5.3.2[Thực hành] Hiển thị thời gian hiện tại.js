import React from 'react';


const Time = () => {
    const time = new Date().toLocaleTimeString()
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {time}.</h2>
        </div>
    );
};
export default Time;