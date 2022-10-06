import React from 'react';
import Comment from './comment';

class CommentsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredComments: props.comments,
            authorSelected: 0
        }
        
        this.delComment = props.delComment;

        this.filterCommentsByAuthor = this.filterCommentsByAuthor.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    getAuthorName(authorId) {
        return this.props.authors.find((item) => {
            return item.id === authorId
        }).name
    }

    handleFilterChange(event) {
        const authorId = event.target.value;
        this.filterCommentsByAuthor(authorId);
    }

    filterCommentsByAuthor(authorId) {

        let filtered = this.props.comments;
        if(authorId != '0'){
            filtered = this.props.comments.filter((item) => {
                return item.author == authorId
            })
        }

        this.setState({
            filteredComments: filtered,
            authorSelected: authorId
        })
    }

    render() {
        return (
            <div className='componentsList'>
                <div style={{ width: '500px'}}>
                    <label htmlFor="authorsFilter">Filtrar por autor: </label>
                    <select name='authorsFilter' onChange={this.handleFilterChange} value={this.state.authorSelected} style={{ width: '100%'}}>
                    <option value={0}>Todos</option>
                    { this.props.authors.map((item, index) => {
                        return <option key={index} value={item.id}>{item.name}</option>
                    })}
                    </select>
                </div>

        { this.state.filteredComments.length > 0 ?
            <div>
                { this.state.filteredComments.map((item, index) => {
                    return <Comment 
                                key={index} 
                                id={item.id}
                                author={this.getAuthorName(item.author)}
                                authorId={item.author}
                                date={item.date.toLocaleString()} 
                                text={item.text}
                                filterCommentsByAuthor={this.filterCommentsByAuthor}
                                delComment={this.delComment}
                            />
                })}
            </div>
        :
            <div>Lo dejo a tu criterio.</div>
        }
        </div>
        )
    }
}
export default CommentsList;
