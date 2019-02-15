import React from 'react'
import Hamburger from './Hamburger'
import Brand from './Brand'
import Search from './Search'
import ContactNumber from './ContactNumber'

function Header() {
    return (
        <header className="site-header">
            <div className="site-header-section"><Hamburger /></div>
            <div className="site-header-section"><Brand linkTo={'/'} /></div>
            <div className="site-header-section">
                <ContactNumber number={'202 - 555 - 0199'} />
                <Search />
            </div>
        </header>
    )
}

export default Header