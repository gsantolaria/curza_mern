import React from "react";

class CommentsForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            error: false,
            show: false,
        }
        this.processComment = this.processComment.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }
   
    /**
     * @param {event} event
     */
    processComment(event){
        let authorId = parseInt(event.target.form.elements.author.value);
        let text = event.target.form.elements.text.value;
        if(authorId && text){
             this.setState({
                error: false,
                show: false,
            })
            this.props.addComment(authorId, text)
            event.target.form.elements.author.value = 0;
            event.target.form.elements.text.value = '';
        }else{
            this.setState({
                error: true,
            })
        }
    }

    show(){
        this.setState({
            show: true,
        })
    }

    hide(){
        this.setState({
            show: false,
        })
    }


    render(){
        return (
            <div className='commentsForm' style={{ paddingBlock: '1em'}}>
                {this.state.show ?
                <form style={{  width: '500px', border: '2px solid', marginTop: '10px'}}>
                    {this.state.error && <div style={{ background: '#ffc107 ', textAlign: 'center', padding: '1.1em'}}>Complete todos los datos para subir el comentario</div> }
                    <h3 style={{ textAlign: 'center', marginBlockEnd: '1.5em' }}>Cargar nuevo Comentario</h3>
                    <div style={{  margin: '10px', display: 'grid', gridTemplateColumns: '35% 65%'}}>
                        <label htmlFor="author">Autor:</label>
                        <select id="" name="author" style={{ padding: '16px 20px', border: 'none', borderRadius: '10px', background: '#d3d3d3'}}>
                            <option value="0">Seleccione un autor...</option>
                            { this.props.authors.map((item, index) => {
                                 return <option key={index} value={item.id}>{item.name}</option>
                             })}
                         </select>
                    </div>
                    <div style={{  margin: '10px', display: 'grid', gridTemplateColumns: '35% 65%'}}>
                        <label htmlFor="text">Comentario:</label>
                        <textarea name="text" required style={{ height: '90px', border: '2px solid #d3d3d3', borderRadius: '10px', resize: 'none' }}/>
                    </div>
                    <div style={{  margin: '10px', textAlign: 'center'}}>
                        <button
                            type="submit"
                            style={{ background: '#198754', padding:'1em', margin: '0.9em', cursor:'pointer', border: 'none', color: 'white', fontSize: '1.1em'}}
                            onClick={(e) => {e.preventDefault(); this.processComment(e);}}>
                            Comentar
                        </button>
                       <button
                            style={{ background: '#b70000',padding:'1em', margin: '0.9em', cursor:'pointer', border: 'none', color: 'white', fontSize: '1.1em'}}
                            onClick={() => this.hide()}>
                                Cancelar
                        </button>

                    </div>
                </form>
                :
                <button
                    style={{ background: '#198754', width: '75%', padding:'1em', marginBlock: '1.2em', cursor:'pointer', border: 'none', color: 'white', fontSize: '1.1em'}}
                    onClick={() => this.show()}>
                        Crear Nuevo
                </button>
                }
            </div>
        )
    }
    
}
export default CommentsForm;
