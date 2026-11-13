import React, { useState } from 'react'

export const Intro = (props) => {
    const [user, setUser] = useState({
        address: "Pakistan",
        role: "Software Engineer",
    });
    return (
        <div>
            <h1>Introduction</h1>
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
            <h2>{user.address}</h2>
            <h2>{user.role}</h2>
            {props.age >= 18 ? <h1>Eligible for vote</h1> : <h1>Not Eligible for vote</h1>}
        </div>
    )
}
