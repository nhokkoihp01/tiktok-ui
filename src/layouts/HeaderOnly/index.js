
import React from 'react';
import Header from "~/layouts/Popper/Menu/Header";


function HeaderOnly({children}) {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="content">
                    {children}
                </div>

            </div>


        </div>
    );
}

export default HeaderOnly;