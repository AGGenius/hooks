import { useEffect, useState } from "react";
import axios from 'axios';

function useApi(url) {
    const [apiData, setApiData] = useState([]);
    const [apiError, setApiError] = useState("");
    const [apiLoad, setApiLoad] = useState(true);

    const getData = async () =>{
        try{
            const response = await axios.get(url);
            const newData = response.data;
            setApiData(newData); 
            setApiLoad(false);
        } catch (error){
            setApiError(error);           
            setApiLoad(false);
        }  
    }

    useEffect(() => {
        getData();
    }, [url]);

    return {
        apiData,
        apiError,
        apiLoad
    };
}

export default useApi;