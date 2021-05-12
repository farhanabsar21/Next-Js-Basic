import React, { useEffect } from 'react';
import Link from "next/link";

// importing useRouter coming from next library 
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(()=> {
        setTimeout(()=> {
            // router er shathe go() use kora jay
            router.push("/");
        }, 3000)
    }, [])
    return (
        <div className="not-found">
            <h1>Oooops..</h1>
            <h2>That page can not be found</h2>
            <p>Go back to the <Link href="/"><a>Home Page</a></Link></p>
        </div>
    );
};

export default NotFound;