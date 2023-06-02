import React from 'react'
import './calculator.css'

const Calculator = () => {
  return (
    <div className="row wholeCalc">
        <div className="col-6 offset-3">
    <div className="row">
        <div className="col-12 result">0</div>
    </div>
    <div className="row">
        <div className="col-3 symbol text-center">AC</div>
        <div className="col-3 symbol">+/-</div>
        <div className="col-3 symbol">%</div>
        <div className="col-3 symbol ">x</div>
    </div>
    <div className="row">
        <div className="col-3 number">7</div>
        <div className="col-3 number">8</div>
        <div className="col-3 number">9</div>
        <div className="col-3 symbol">x</div>
    </div>
    <div className="row">
        <div className="col-3 number">4</div>
        <div className="col-3 number">5</div>
        <div className="col-3 number">6</div>
        <div className="col-3 symbol">-</div>
    </div>
    <div className="row">
        <div className="col-3 number">1</div>
        <div className="col-3 number">2</div>
        <div className="col-3 number">3</div>
        <div className="col-3 symbol">+</div>
    </div>
    <div className="row">
        <div className="col-6 number">0</div>
        <div className="col-3 number">.</div>
        <div className="col-3 symbol">=</div>
    </div>
    </div>
    
    </div>
  )
}

export default Calculator
