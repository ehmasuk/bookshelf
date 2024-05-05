import axios from "axios";
import { useEffect, useState } from "react";

function useGet(url) {
    const [isLoading, setIsLoading] = useState(null);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

    return [data, isLoading, error];
}

export default useGet;
