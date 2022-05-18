import { Avatar } from '@mui/material'
import React from 'react'
import './CommentRow.css'

function CommentRow( { profile, comment } ) {
    return (
        <div className="commentRow">
            { profile }
            { comment } 
        </div>
    )
}

export default CommentRow
