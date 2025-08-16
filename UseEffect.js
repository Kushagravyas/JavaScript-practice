import React, {useEffect , useState} from "react";

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("component rerendered or count changed : ", count)
    }, [count]);

    return(
        <div>
            <h2> count : {count} </h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
export default Example; 

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component rerender or count changed : ", {count});
    }, [count]);

    return(
        <div>
            <h2> count : {count} </h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

