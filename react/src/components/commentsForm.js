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
            <div className='commentsForm' style={{ paddingBlock: '1em'}}>
                <form style={{  width: '500px', border: '2px solid', marginTop: '10px'}}>
                {this.state.error && <div style={{ background: '#ffc107 ', textAlign: 'center'}}>Complete todos los datos para subir el comentario</div> }
                    <h3 style={{ textAlign: 'center' }}>Cargar nuevo Comentario</h3>
                    <div style={{  margin: '10px', display: 'grid', gridTemplateColumns: '35% 65%'}}>
                        <label htmlFor="author">Autor:</label>
                         <select id="" name="author">
                            <option value="0">Seleccione un autor...</option>
                            { this.props.authors.map((item, index) => {
                                 return <option key={index} value={item.id}>{item.name}</option>
                             })}
                         </select>
                    </div>
                    <div style={{  margin: '10px', display: 'grid', gridTemplateColumns: '35% 65%'}}>
                        <label htmlFor="text">Comentario:</label>
                        <textarea name="text" required style={{ height: '90px'}}/>
                    </div>
                    <div style={{  margin: '10px', textAlign: 'center'}}>
                        <button
                            type="submit"
                            style={{ background: '#198754', width: '75%', padding:'5px', cursor:'pointer'}}
                            onClick={(e) => {e.preventDefault(); this.processComment(parseInt(e.target.form.elements.author.value), e.target.form.elements.text.value);}}>
                            Comentar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
    
}
export default CommentsForm;
