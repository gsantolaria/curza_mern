import React from 'react';
import CommentsList from './commentsList';
import CommentsForm from './commentsForm';
import { COMMENTS, AUTHORS } from './constants';
import './comments.css'

class Comments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: null,
            authors: AUTHORS,
            topScroller: true,
            bottomScroller: false,
        }

        this.comRef = React.createRef();

        this.addComment = this.addComment.bind(this);
        this.delComment = this.delComment.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.goToTop = this.goToTop.bind(this);
        this.goToBottom = this.goToBottom.bind(this);        
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                comments: COMMENTS,
            })
        },1000);
        this.comRef.current.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        this.comRef.current.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        if(this.comRef.current.scrollTop == 0) {
            this.setState({
                topScroller: true,
                bottomScroller: false,
            })
        } else if(this.comRef.current.scrollTop >= (this.comRef.current.scrollHeight - this.comRef.current.clientHeight)){
            this.setState({
                topScroller: false,
                bottomScroller: true,
            })
        } else {
            this.setState({
                topScroller: false,
                bottomScroller: false,
            })
        }
    }

    goToTop(){
        this.comRef.current.scrollTo({
           top: 0,
           left: 0,
            behavior: 'smooth'
        })
    }

    goToBottom(){
        this.comRef.current.scrollTo({
           top: this.comRef.current.scrollHeight - this.comRef.current.clientHeight,
           left: 0,
            behavior: 'smooth'
        })
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
        this.goToBottom();
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
                { this.state.topScroller &&
                    <div className='top-scroller' onClick={this.goToBottom}>Ir abajo</div>
                }
                { this.state.comments ?
                    <>
                        <CommentsForm authors={this.state.authors} addComment={this.addComment}/>
                        <CommentsList comments={this.state.comments} authors={this.state.authors} delComment={this.delComment}/>
                    </>
                :
                    <div>Cargando...</div>    
                }
                { this.state.bottomScroller &&
                    <div className='bottom-scroller' onClick={this.goToTop}>Ir arriba</div>
                }
            </div>
        )
    }
}
export default Comments;