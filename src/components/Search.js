import React from 'react'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="search">
                <a href="javascript:void(0)" className="search-icon"><i className="icon ion-ios-search"></i></a>
                <input className="search-input" type="text" name="" id="" />
            </div>
        )
    }
}

export default Search