// importar react y react-dom
import React from 'react';
import ReactDOM from 'react-dom/client';

import Comments from './components/comments';

// obtener la referencia de un elemento del dom id=root
const el = document.getElementById('root');


// decirle a react que tome el control de el elemento
const root = ReactDOM.createRoot(el);

// crear un componente
function App() {
    return (
        <div className='app'>
            <Comments />
        </div>
    )
}

// mostrarlo en pantalla
root.render(<App/>);