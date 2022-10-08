import React from 'react';

import CommentsList from './commentsList';
import CommentsForm from './commentsForm';

import { COMMENTS, AUTHORS } from './constants';

class Comments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: null,
            authors: AUTHORS,
        }

        this.addComment = this.addComment.bind(this);
        this.delComment = this.delComment.bind(this);
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                comments: COMMENTS,
            })
        },1000);
    }

    addComment(data) {
        const newComment = {
            id: (this.state.comments[this.state.comments.length -1].id) + 1,
            author: parseInt(data.commentAuthor),
            text: data.commentText,
            date: new Date()
        }
        const newComments = this.state.comments.concat(newComment);
        this.setState({
            comments: newComments,
        })
    }

    delComment(commentId) {
        this.setState({
            comments: this.state.comments.filter((item) =>{
                return commentId !== item.id
            }),
        })
    }

    render() {
        return (
            <div className='comments' ref={this.comRef}>
                { this.state.comments ?
                    <>
                        <CommentsForm authors={this.state.authors} addComment={this.addComment}/>
                        <CommentsList comments={this.state.comments} authors={this.state.authors} delComment={this.delComment}/>
                    </>
                :
                    <div>Cargando...</div>    
                }
            </div>
        )
    }
}
export default Comments;