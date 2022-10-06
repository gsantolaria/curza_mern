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
            <div className='comments' style={{ height: '100%'}} >
                { this.state.comments ?
                           <div style={{ height: '100%'}}>
                               <div style={{ position:'absolute', width: '100%', zIndex:'1'}}>
                               {/*<CommentsForm authors={this.state.authors} addComment={this.addComment} />*/}
                               <CommentsList comments={this.state.comments} authors={this.state.authors} delComment={this.delComment} />
                               </div>
                               <div style={{ display: !this.state.loading && 'none' }}>
                                    <h2 style={{ position:'absolute', zIndex:'3', width: '100%', height: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Cargando...</h2>
                                    <div style={{ position:'absolute', zIndex:'2', background: 'white', opacity: '0.5', width: '100%', height: '100%' }} >
                                    </div>
                                </div>
                           </div>

                :
                    <h2 style={{ position:'absolute', zIndex:'3', width: '100%', height: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Cargando App...</h2>    
                }
            </div>
        )
    }
}
export default Comments;
