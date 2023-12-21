import { useEffect, useState } from "react";

export function useFetch(url) {
    const [obj,setObj] = useState(null);
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const abortController = new AbortController();
    const signal = abortController.signal;

    useEffect(()=>{
        setLoading(true);
        fetch(url, {signal})
        .then((resp)=>resp.json())
        .then((data)=> setObj(data))
        .catch((err)=> setError(err))
        .finally(()=>setLoading(false))
        return()=>abortController.abort();
    },[url])
    return [obj, error, loading];
}