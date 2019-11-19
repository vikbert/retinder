import React from 'react';
import TopNav from "./components/TopNav";

const Layout = ({children}) => {
    return (
        <>
            <TopNav/>
            <div className="columns is-mobile is-centered" style={{marginTop: '60px'}}>
                <div className="column">
                    <div className="container is-fluid" style={{padding: "0 16px"}}>
                        {children}
                    </div>
                </div>
            </div>
            <div className="container"></div>
        </>
    );
};

export default Layout;
