import React, { useState } from 'react'

function Diferente() {
  const [meuFormulario, alteraPessoa] = useState({})


function onChange(event) {
  alteraPessoa({
    ...meuFormulario,
         cidade: event.target.value
     })
    }

  return <form>
    <input type="name" name="" id="nome" /><br />
    <input type="number" name="" id="idade" /><br />
    <input type="date" name="" id="data de nascimento" /><br />
    <input type="email" name="" id="email" /><br />
    <input type="checkbox" name="" id="caixa de seleção" /><br />
    <input onChange={onChange}type="text" name="cidade" id="cidade"/><br/>
  </form>
}

  


export default Formulario