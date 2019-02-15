import React from 'react'
import NavItem from './NavItem'

function CategoryNav() {
    const items = [
        { link: '/', title: 'sleeping beds' },
        { link: '/', title: 'lounge chairs' },
        { link: '/', title: 'chairs' },
        { link: '/', title: 'office changes' },
        { link: '/', title: 'tables, nightstands' },
        { link: '/', title: 'kitchen furniture' }
    ]

    const navItems = items.map(item => {
        return <NavItem link={item.link} title={item.title} key={item.title} />
    })

    return (
        <div className="category-nav-container">
            <div className="container mx-auto">
                <ul className="nav category-nav">
                    {navItems}
                </ul>
            </div>
        </div>
    )
}

export default CategoryNav