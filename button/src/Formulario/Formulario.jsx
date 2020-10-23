import React, { useState } from 'react'

function Formulario() {
  const [meuFormulario, alteraPessoa] = useState({})

  function onChangeUm(event) {
    alteraPessoa({
      ...meuFormulario,
      nome: event.target.value
    })
  }

  function onChangeDois(event) {
    alteraPessoa({
      ...meuFormulario,
      idade: event.target.value
    })
  }

  function onChangeTres(event) {
    alteraPessoa({
      ...meuFormulario,
      data: event.target.value
    })
  }

  function onChangeQuatro(event) {
    alteraPessoa({
      ...meuFormulario,
      email: event.target.value
    })
  }

  function onChangeCinco(event) {
    alteraPessoa({
      ...meuFormulario,
      cidade: event.target.value
    })
  }

  function onChangeSeis(event) {
    alteraPessoa({
      ...meuFormulario,
      empregado: event.target.checked
    })
  }


  return <form>
    <input onChangeUm={onChangeUm} type="name" name="nome" id="nome" />
    <label onChangeUm={onChangeDois} htmlFor="Idade"></label><input type="number" name="idade" id="idade" />
    <input onChangeUm={onChangeTres} type="date" name="data" id="data de nascimento" />
    <input onChange={onChangeQuatro} type="email" name="email" id="email" />
    <input onChange={onChangeCinco} type="text" name="cidade" id="cidade" />
    <input onChange={onChangeSeis} type="checkbox" name="empregado" />

    <div>
      <p>{meuFormulario.nome} Está trabalhando {meuFormulario.empregado ? 'trabalhando' : 'procurando um empregado'}</p>
      {/* {meuFormulario.empregado ? <p>{meuFormulario.nome} está trabalhando </p> : null}
      {meuFormulario.empregado && <p>{meuFormulario.nome} está trabalhando </p>} */}
    </div>

    <p>{}</p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </form>
}

export default Formulario