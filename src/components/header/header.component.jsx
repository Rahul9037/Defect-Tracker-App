import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css';

const Header = () => {
    const [currentUser ,  setcurrentUser] = useState(null)
    useEffect( () => {
        if( sessionStorage.getItem('user') === 'developer' )
        {
            setcurrentUser('developer');
        }
    }, [])

    const handleLogout = () => {
        sessionStorage.removeItem('user')
    }

    return (
        <div className="homepage">
            <div className="homepage-header">
                DEFECT TRACKER
            </div>
            <div className="options">
            <Link to="/" className="logout-option" onClick={handleLogout}>Logout</Link>
                <div className="other-options">
                    {  
                    (currentUser === 'developer') ? 
                    null : 
                    <div>
                    <Link to="/adddefect">Add Defect</Link>
                    &nbsp;&nbsp;&nbsp; 
                    </div>
                    }
                    <Link to="/">View Defect</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;