import React from "react";

class CommentsForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            error: false,
        }
        this.processComment = this.processComment.bind(this);
    }
   
    /**
     * @param {int} authorId
     * @param {string} text
     */
    processComment(authorId, text){
        if(authorId && text){
             this.setState({
                error: false,
            })
           this.props.addComment(authorId, text)
        }else{
            this.setState({
                error: true,
            })
        }
    }

    render(){
        return (
            <div className='commentsForm'>
                {this.state.error && <div style={{ background: '#dc3545 ', color:'white', textAlign: 'center'}}>Complete todos los datos para subir el comentario</div> }
                <form>
                    <div>
                         <label htmlFor="author">Autor</label>
                         <select id="" name="author">
                            { this.props.authors.map((item, index) => {
                                 return <option key={index} value={item.id}>{item.name}</option>
                             })}
                         </select>
                    </div>
                    <div>
                         <label htmlFor="text">Comentario</label>
                        <input type="text-area" name="text" required />
                    </div>
                    <div>
                        <button type="submit" onClick={(e) => {e.preventDefault(); this.processComment(parseInt(e.target.form.elements.author.value), e.target.form.elements.text.value);}}>Comentar</button>
                    </div>
                </form>
            </div>
        )
    }
    
}
export default CommentsForm;
