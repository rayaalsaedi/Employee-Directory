import React from 'react';
import "./styles.css";

const Header = () => {
    return(
        <header>
            <h1 className="text-center">Employee Directory</h1>
            <p className='text-center'>
                Search by name or click on the columns to filter by name. 
            </p>
        </header>
    );
};
export default Header;