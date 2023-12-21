import { useState } from "react";

export function useCounter(initialValue = 0,sumValue = 1) {
    const [counter,setCounter] = useState(initialValue);
    const increment = ()=>{
        setCounter(prev=>prev + sumValue)
    }
    
    const decrement = ()=>{
        setCounter(prev=>prev - sumValue)
    }

    return {counter, increment, decrement}
}