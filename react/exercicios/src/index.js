import React from 'react'
import ReactDOM from 'react-dom/client'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'



// Crie uma raiz para o elemento DOM
const root = ReactDOM.createRoot(document.getElementById('root'))

// Use o método render da nova API
root.render(<div>
    
    <Pai nome="Cristina" sobrenome="Silva">
        <Filho nome="Luiz" />
        <Filho nome="João" />
        <Filho nome="Isabelli" />
    </Pai>
    
    </div>)
