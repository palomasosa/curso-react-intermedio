import { useState } from "react";

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(()=>{
        try {
            const storedValue = window.localStorage.getItem(key)
            return storedValue !== null ? JSON.parse(storedValue) : initialValue;
        } catch (error) {
            return initialValue;
        }
    })
    

    const updateValue = (newValue)=>{
        try {
            setValue(newValue);
            window.localStorage.setItem(key, JSON.stringify(newValue))
        } catch (error) {
                console.error(error)
        }
    }
    return [value, updateValue]
}