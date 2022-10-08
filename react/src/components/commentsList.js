import React, {useState, useEffect} from 'react';
import Comment from './comment';

function CommentsList(props) {
    const [filteredComments, setFilteredComments] = useState([]);
    const [authorSelected, setAuthorSelected] = useState(0);

    useEffect(() => {
        setFilteredComments(props.comments);
        setAuthorSelected(0);
    },[props.comments])

    const getAuthorName = (authorId) => {
        return props.authors.find((item) => {
            return item.id === authorId
        }).name
    }

    const handleFilterChange = (event) => {
        const authorId = event.target.value;
        filterCommentsByAuthor(authorId);
    }

    const filterCommentsByAuthor = (authorId) => {
        let filtered = props.comments;
        if(authorId != '0'){
            filtered = props.comments.filter((item) => {
                return item.author == authorId
            })
        }
        setFilteredComments(filtered);
        setAuthorSelected(authorId);
    }

    return (
        <div className='componentsList' >
            <select name='authorsFilter' onChange={handleFilterChange} value={authorSelected}>
                <option value={0}>Todos</option>
                { props.authors.map((item, index) => {
                    return <option key={index} value={item.id}>{item.name}</option>
                })}
            </select>

            { filteredComments.length > 0 ?
                <div>
                    { filteredComments.map((item, index) => {
                        return <Comment 
                                    key={index}
                                    author={getAuthorName(item.author)}
                                    authorId={item.author}
                                    date={item.date.toLocaleDateString()} 
                                    text={item.text}
                                    filterCommentsByAuthor={filterCommentsByAuthor}
                                    delComment={props.delComment}
                                    commentId={item.id}
                                />
                    })}
                </div>
            :
                <div>Lo dejo a tu criterio.</div>
            }
        </div>
    )
}
export default CommentsList;