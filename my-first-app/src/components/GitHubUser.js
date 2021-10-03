import React, { useState, useEffect } from 'react';

function GitHubUser(props) {
    // Fetch some data from the GitHub API
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch(`https://api.github.com/users/${props.login}`).then(res => res.json()).then(setData).catch(console.error);


    }, []);

    if (data) {
        return (<>
            For user {props.login}:
            <div> {data["id"]}</div>
        </>
        )
    }


    return (
        null
    );

}


export default GitHubUser;