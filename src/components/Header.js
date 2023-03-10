import React from "react";
import { useLocation } from "react-router-dom";
// import  PropTypes  from 'prop-types';
import Button from "./Button";

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button color={showAdd ? 'black' : 'green'} text={showAdd ? 'Close' : 'Add Task'}onClick={onAdd} />}
        </header>
    )
}

Header.defaultProps ={
    title: "notonot tracker"
}

// Header.propTypes ={
//     title: PropTypes.string
// }
 
// const headngStyle = {
//     color: 'pink'
// }

export default Header;