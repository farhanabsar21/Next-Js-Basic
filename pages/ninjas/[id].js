// ekta page er name [id] hoy? 
// ha next js e dynamic route create korte hole evabe likhte hobe..

// ekhane protteker alada detail data dekhate hole getStaticPath use korte hobe
// getStaticPath is asynchronous

import React from 'react';

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();

    const paths = data.map(person => {
        return {
            params: { id: person.id.toString() } // toString korar karon hoilo amader pura data tai str lagbe 
        }
    })

    return {
        paths: paths,
        fallback: false // fallback holo jodi route na thake tahole 404 return dibe
    }
}

// ekhane context parameter ke kivabe use krse dekhso?

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return {
        props: { person: data}
    }
}

const Details = ({person}) => {
    return (
        <div>
            <h1>{person.name}</h1>
            <p>Email: {person.email}</p>
            <p>Website: {person.website}</p>
            <p>Address: {person.address.city}</p>
        </div>
    );
};

export default Details;