import React from 'react'
import NavItem from './NavItem'

function FooterNav(props) {
    const items = [
        { link: '/', title: 'catalog' },
        { link: '/', title: 'designers' },
        { link: '/', title: 'blog' },
        { link: '/', title: 'inspiration' },
        { link: '/', title: 'about us' },
        { link: '/', title: 'contact' }
    ]

    const navItems = items.map(item => {
        return <NavItem link={item.link} title={item.title} key={item.title} />
    })

    return (
        <ul className="nav footer-nav">
            {navItems}
        </ul>
    )
}

export default FooterNav