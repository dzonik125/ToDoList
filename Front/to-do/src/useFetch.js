import { useEffect } from "react";

const useFetch = (url) => {

    useEffect(() => {
        fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('Could not fetch the data!');
                    }
                    return res.json();})
                 .then(data => {
                    console.log(data);
     })
    }, [url]);
}

export default useFetch