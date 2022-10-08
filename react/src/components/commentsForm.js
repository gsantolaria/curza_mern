import React from 'react';

class CommentsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            commentAuthor: 0,
            commentText: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        })
    }

    resetForm() {
        this.setState({
            commentAuthor: 0,
            commentText: '',
        })
    }

    submitForm() {
        this.props.addComment(this.state);
        this.resetForm();
    }

    render() {
        return (
            <div className='comments-form'>
                <select name='commentAuthor' onChange={this.handleChange} value={this.state.commentAuthor}>
                    <option value={0}>Todos</option>
                    { this.props.authors.map((item, index) => {
                        return <option key={index} value={item.id}>{item.name}</option>
                    })}
                </select>
                <br />
                <input type='text' name='commentText' onChange={this.handleChange} value={this.state.commentText} />
                <br />
                <button type='button' onClick={this.submitForm} disabled={!this.state.commentAuthor} >Submit</button><button onClick={this.resetForm}>Reset</button>
                <hr />
            </div>
        )
    }
}
export default CommentsForm;