import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    // const design = {
    //     display: "flex",
    //     gap: "10px"
    // }
    return (
        <div style={{display: 'flex', gap: "10px"}}>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Header;