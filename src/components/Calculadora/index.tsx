import React, { useState } from 'react'
import './index.css'
import { Adiciona, Calcular } from '../Calculo'

const Index = () => {
  const [result, setResult] = useState<String>('')

  const handleClear = () => {
    setResult("");
  }

  const handleAdd = (value: String) => {
    setResult(Adiciona(result, value))
  }

  const handleResult = () => {
    setResult(Calcular(result))
  }

  return (
    <div className='Calculadora'>
      <span className='display-number'>{result}</span>
      <div className='numbers'>
        <button className="botoes limpa" onClick={() => handleClear()}>C</button>
        <button className="botoes azul" onClick={() => handleAdd("/")}>/</button>
        <button className="botoes" onClick={() => handleAdd("7")}>7</button>
        <button className="botoes" onClick={() => handleAdd("8")}>8</button>
        <button className="botoes" onClick={() => handleAdd("9")}>9</button>
        <button className="botoes azul" onClick={() => handleAdd("*")}>*</button>
        <button className="botoes" onClick={() => handleAdd("4")}>4</button>
        <button className="botoes" onClick={() => handleAdd("5")}>5</button>
        <button className="botoes" onClick={() => handleAdd("6")}>6</button>
        <button className="botoes azul" onClick={() => handleAdd("-")}>-</button>
        <button className="botoes" onClick={() => handleAdd("1")}>1</button>
        <button className="botoes" onClick={() => handleAdd("2")}>2</button>
        <button className="botoes" onClick={() => handleAdd("3")}>3</button>
        <button className="botoes azul" onClick={() => handleAdd("+")}>+</button>
        <button className="botoes zero" onClick={() => handleAdd("0")}>0</button>
        <button className="botoes" onClick={() => handleAdd(".")}>.</button>
        <button className="botoes azul" onClick={() => handleResult()}>=</button>
      </div>
    </div>
  )
}

export default Index
