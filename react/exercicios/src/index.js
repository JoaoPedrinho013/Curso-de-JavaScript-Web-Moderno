import React from 'react'
import ReactDOM from 'react-dom/client'
import Bomdia from './componentes/Bomdia'


// Crie uma raiz para o elemento DOM
const root = ReactDOM.createRoot(document.getElementById('root'))

// Use o método render da nova API
root.render(<Bomdia nome = "Ben" idade = {10} />)
