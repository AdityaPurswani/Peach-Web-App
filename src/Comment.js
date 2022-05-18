import React from 'react'


function Comment({ username, text }) {
    return (
        <div className="post__comment">
            <p>
                <strong>{ username }</strong> {text}
            </p>
        </div>
    )
}

export default Comment
