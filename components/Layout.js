// suppose you have some components to share with every page (nav, footer)
// you have to use Layout template to share it once

import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
        <div className="content">
            <Navbar></Navbar>
                { children }
            <Footer></Footer>
        </div>
    );
};

export default Layout;