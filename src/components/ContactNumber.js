import React from 'react'

function ContactNumber(props) {
    return (
        <div>
            <a href="javascript:void(0)" className="contact-number">{props.number}</a>
        </div>
    )
}

export default ContactNumber