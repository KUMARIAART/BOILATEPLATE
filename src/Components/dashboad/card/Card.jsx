import React, { useEffect, useState } from "react";
function Card(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/read")
            .then((res) => {
                return res.json()
            })
            .then((res1) => {
                // console.log(res1)
                setData(res1)
            })

    }, [])

    // console.log(data)
    function MatchData(obj) {
        for (let match of data) {
            if (match.title == obj.title) {
                alert("This news already add in read later")
                return
            }
        }
        fetch('http://localhost:3000/read', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        }).then(res => {
            return res.json()
        })
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <img src={props.image} />
                    <h5 className="card-title">{props.Author}</h5>
                    <p className="card-text">{props.Title}</p>
                    <a href={props.Url}>{props.Url}</a><br />
                    <a href="#" className="btn btn-primary" onClick={() => { MatchData(props.value) }}>Read Later</a>
                </div>
            </div>
        </>
    );
}
export default Card;