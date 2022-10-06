import React from 'react';

import CommentsList from './commentsList';
import {Data} from './data';

class Comments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: null,
            authors: Data.getAllAuthors(),
            loading: true,
        }
        this.delComment = this.delComment.bind(this);
    }

    componentDidMount(){
        setTimeout(() => {
           const comments = Data.getAllComments();
           this.setState({
               comments: comments,
               filteredComments: comments,
               loading: false
           })
        },1000);
     }

    delComment(commentId){
        if(Data.deleteComment(commentId)){
            this.setState({loading: true});
            this.componentDidMount();
        }
    }

    render() {
        return (
            <div className='comments' >
                { !this.state.loading ?
                    <>
                        {/*<CommentsForm authors={this.state.authors} addComment={this.addComment} />*/}
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
