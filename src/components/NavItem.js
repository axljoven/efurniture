import React from 'react'

function NavItem(props) {
    return (
        <li className="nav-item">
            <a href={props.link}>
                {props.icon != null &&
                    <img className="nav-item-icon" src={props.icon} alt=""/>
                }
                <span className="nav-item-title">{props.title}</span>
            </a>
        </li>
    )
}

export default NavItem