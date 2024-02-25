import { useEffect, useState } from "react";

function usePost(url, info) {
    const [postData, setPostData] = useState(null);
    const [postLoading, setPostLoading] = useState(true);
    const [postError, setPostError] = useState(null);

    const handlePostData = (url, info) => {
        fetch(url, {
            method: "POST",
            body: JSON.stringify(info),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => {
                setPostLoading(false);
                return res.json();
            })
            .then((data) => {
                setPostData(data);
            })
            .catch((err) => {
                setPostLoading(false);
                setPostError(err.message);
            });
    };

    useEffect(() => {
        postData(url, info);
    }, []);

    return [postData, postLoading, postError];
}

export default usePost;
