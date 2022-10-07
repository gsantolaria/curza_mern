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
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                comments: COMMENTS,
            })
        },1000);
    }

    addComment(values) {

        const newComment = {
            author: parseInt(values.commentAuthor),
            date: new Date(),
            text: values.commentText
        }

        const newComments = this.state.comments.concat(newComment);
        console.log("nueva lista de comentario: ",newComments);

        this.setState({
            comments: newComments
        })
    }

    render() {
        return (
            <div className='comments' >
                { this.state.comments ?
                    <>
                        <CommentsForm authors={this.state.authors} addComment={this.addComment} />
                        <CommentsList comments={this.state.comments} authors={this.state.authors} delComment={this.delComment} />
                    </>
                :
                    <div>Cargando...</div>    
                }
            </div>
        )
    }
}
export default Comments;