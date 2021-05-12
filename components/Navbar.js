import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <Image src="/shop.png" alt="brand" width={64} height={64}/>
                </div>
                <div>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/ninjas"><a>People List</a></Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;