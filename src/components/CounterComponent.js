import React, { useState } from "react"

function CounterComponent() {
    const [count, setCount] = useState(0);
    
    
    return (
        <main>
            <h1>Counter Component</h1>
            <button onClick = {()=>setCount(count-1)}>-</button>
            <span>{ count }</span>
            <button onClick = {()=>setCount(count+1)}>+</button>
        </main>
    )
}
export default CounterComponent;