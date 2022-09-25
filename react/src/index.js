// importar react y react-dom
import React from 'react';
import ReactDOM from 'react-dom/client';

import Comment from './comment';

// obtener la referencia de un elemento del dom id=root
const el = document.getElementById('root');


// decirle a react que tome el control de el elemento
const root = ReactDOM.createRoot(el);

// crear un componente
function App() {
    return (
        <div className='comments' >
            <Comment author='pepe' date='ahora' />
            <Comment author='diego' date='hace 2 minutos' />
            <Comment author='mariano' date='hace 5 minutos'/>
            <Comment author='pablo' date='hace 1 hora'/>
        </div>
    )
}

// mostrarlo en pantalla
root.render(<App/>);