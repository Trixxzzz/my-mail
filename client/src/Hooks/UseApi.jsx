import { useState } from 'react'
import API_GMAIL from '../Services/Api'

const UseApi = (urlObject) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
  
    const call = async (payload,type='') => {
        setResponse(null);
        setError("");
        setIsLoading(true);

        try {
            let res = await API_GMAIL(urlObject, payload,type);
            setResponse(res.data);
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    return { call, response, error, isLoading }
}

export default UseApi
