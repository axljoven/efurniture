import React from 'react'
import Hamburger from './Hamburger'
import Brand from './Brand'
import Search from './Search'

function Header() {
    return (
        <header className="site-header">
            <Hamburger />
            <Brand />
            <Search />
        </header>
    )
}

export default Header