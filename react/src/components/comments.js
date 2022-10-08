import React, { useState, useRef, useEffect } from 'react';
import CommentsList from './commentsList';
import CommentsForm from './commentsForm';
import { COMMENTS, AUTHORS } from './constants';
import './comments.css'

function Comments() {
    const [comments, setComments] = useState(null);
    const [authors] = useState(AUTHORS);
    const [scroller, setScroller] = useState({top: true, bottom: false});
    const comRef = useRef();

    useEffect(() => {
        setTimeout(() => {setComments(COMMENTS)},1000);
        comRef.current.addEventListener('scroll', handleScroll);
        return () => {
            comRef.current.removeEventListener('scroll', handleScroll);
        }
    },[])

    const handleScroll = (event) => {
        if(comRef.current.scrollTop == 0) {
            setScroller({
                top: true,
                bottom: false,
            })
        } else if(comRef.current.scrollTop >= (comRef.current.scrollHeight - comRef.current.clientHeight)){
            setScroller({
                top: false,
                bottom: true,
            })
        } else {
            setScroller({
                top: false,
                bottom: false,
            })
        }
    }

    const goToTop = () => {
        comRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    const goToBottom = () => {
        comRef.current.scrollTo({
           top: comRef.current.scrollHeight - comRef.current.clientHeight,
           left: 0,
           behavior: 'smooth'
        })
    }

    const addComment = (data) => {
        const newComment = {
            id: (comments[comments.length -1].id) + 1,
            author: parseInt(data.commentAuthor),
            text: data.commentText,
            date: new Date()
        }
        const newComments = comments.concat(newComment);
        setComments(newComments);
        goToBottom();
    }

    const delComment = (commentId) => {
        setComments(comments.filter((item) =>{return commentId !== item.id}));
    }

    return (
        <div className='comments' ref={comRef}>
            { scroller.top &&
                <div className='top-scroller' onClick={goToBottom}>Ir abajo</div>
            }
            { comments ?
                <>
                    <CommentsForm authors={authors} addComment={addComment}/>
                    <CommentsList comments={comments} authors={authors} delComment={delComment}/>
                </>
            :
                <div>Cargando...</div>    
            }
            { scroller.bottom &&
                <div className='bottom-scroller' onClick={goToTop}>Ir arriba</div>
            }
        </div>
    )
}
export default Comments;