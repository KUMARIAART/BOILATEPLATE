import React, { useEffect, useState } from "react";
import Card from "./card/Card"
function Dashboad() {
    const [user1, setUser] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            return fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-02-01&sortBy=publishedAt&apiKey=a6280502466849d387e591ac7c5825fd")
                .then((response) => response.json())
                .then((data) => setUser(data.articles));
        }
        fetchData();
    }, [])
    return (
        <div>
            {user1.map((userObj, index) => (
                <Card key={index} value={userObj} image={userObj.urlToImage} Author={userObj.author} Title={userObj.title} Url={userObj.url} />
            ))}
        </div>
    )
}
export default Dashboad;