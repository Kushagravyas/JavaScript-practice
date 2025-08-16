// import React, {useState} from "react";

// function counter() {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//        setCount(count + 1);
//     };

//     return(
//         <div>
//             <h2>Count : {count}</h2>
//             <button onClick={increment}> Increment </button>
//         </div>
//     );

// };
// export default counter;

import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count + 1)
    };

    return(
        <div>
            <h2>Count : {count}</h2>
            <button onClick = {increment}> Increment </button>
        </div>
    );
};
export default Counter;

// useEffect simple code practice.

import React, {useEffect, useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count Changed :", count);
    }, [count]);

    return(
        <div>
            <h2>count : {count}</h2>
            <button onClick = {() => setCount(count => count + 1)}> Increment </button>
        </div>
    );
};
