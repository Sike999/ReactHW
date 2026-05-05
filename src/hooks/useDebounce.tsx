import { useState, useEffect } from "react";
export function useDebounce(value : string | number, delay = 2000){
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)
        }, delay)
        return () => {
            clearTimeout(handler)
        }
    },[value,delay])
    return debounceValue
}