import React from 'react';

const Header = ({ header }) => {

    return (
        <div>
            <h1 align="center" className="col-md-12">
                {header}
            </h1>
        </div>
    );
};

export default Header;