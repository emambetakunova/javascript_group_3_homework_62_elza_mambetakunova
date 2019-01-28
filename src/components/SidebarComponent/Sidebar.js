import React from 'react';
import './Sidebar.css';


const Sidebar = (props) => {
    return (
        <div className="sidebarContent">
            <p><b>Movie name: </b>{props.name}</p>
            <p><b>Released: </b>{props.released}</p>
            <p>{props.review}</p>
        </div>

    )
};

export default Sidebar;