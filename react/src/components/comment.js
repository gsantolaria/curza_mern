import React from 'react';

const Comment = (props) => {
    return (
        <div className='comment' style={{display: 'flex', width: '400px', border: '2px solid', marginTop: '10px'}}>
            <img alt='imagen' src='/user.png' style={{ width: '50px', padding:'5px' }} />
            <div className='content' style={{ flexGrow: 1, padding:'5px', marginLeft: '10px' }}>
                <div className='metadata' style={{display: 'flex', justifyContent: 'space-between'}}>
                    <a href='/' className='author' onClick={(e) => {e.preventDefault();props.filterCommentsByAuthor(props.authorId)}}>{props.author}</a>
                    <span>{props.date}</span>
                    <a href='/' className='author' onClick={(e) => {e.preventDefault();props.delComment(props.commentId)}}>borrar</a>
                </div>
                <div className='text'>
                    {props.text}
                </div>
            </div>
        </div>
    )
}
export default Comment;