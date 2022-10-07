import React from 'react';

class CommentsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            commentText: '',
            commentAuthor: 0
        }
        this.formHandler = this.formHandler.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    formHandler(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        })
    }

    resetForm() {
        this.setState({
            commentText: '',
            commentAuthor: 0           
        })
    }

    submitForm() {

        this.props.addComment(this.state)
        this.resetForm();
    }

    render() {
        return (
            <div className='comments-form' style={{marginBottom: '15px'}}>
                <select name='commentAuthor' onChange={this.formHandler} value={this.state.commentAuthor} style={{margin: '5px 0'}}>
                    <option value={0}>Todos</option>    
                    { this.props.authors.map((item,index) => {
                        return <option key={index} value={item.id}>{item.name}</option>
                })}
                </select>
                <br/>
                <input type='text' name='commentText' onChange={this.formHandler} value={this.state.commentText} style={{margin: '5px 0'}} />
                <br/>
                <button style={{margin: '5px 0'}} disabled={this.state.commentAuthor == 0} onClick={this.submitForm}>Agregar</button> <button style={{margin: '5px 0'}} onClick={this.resetForm} >Reset</button>
                <hr />
            </div>
        )
    }
}
export default CommentsForm