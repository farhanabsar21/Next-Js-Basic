import React from 'react';
import style from "../../styles/Ninjas.module.css";
import Link from "next/link";

// ekhane api call er jnno agei render kore nite hobe kenona 
// useEffect pore render kore jeta problem

// getStaticProps 
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return { props: {people: data} }
}  
const index = ({ people }) => {
    return (
        <div>
            <h1>All People!</h1>
            {people.map(person => 
                <Link href={`/ninjas/${person.id}`} key={person.id}>
                    <a className={style.single}>
                        <h3>{person.name}</h3>
                    </a>
                </Link>
            )}
        </div>
    );
};

export default index;