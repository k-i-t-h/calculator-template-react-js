import React, { Component } from 'react'

export default class NumPadComponent extends Component {
  render() {
    return (
      <div className='key-pad'>
        <button className='btn extra'>&#177;</button>
        <button className='btn extra'>%</button>
        <button className='btn extra'>.</button>
        <button className='btn extra'>&#8676;</button>
        <button className='btn number' value='1'>1</button>
        <button className='btn number' value='2'>2</button>
        <button className='btn number' value='3'>3</button>
        <button className='btn operator'>/</button>
        <button className='btn number' value='4'>4</button>
        <button className='btn number' value='5'>5</button>
        <button className='btn number' value='6'>6</button>
        <button className='btn operator'>*</button>
        <button className='btn number' value='7'>7</button>
        <button className='btn number' value='8'>8</button>
        <button className='btn number' value='9'>9</button>
        <button className='btn operator'>-</button>
        <button className='btn clear'>C</button>
        <button className='btn number' value='0'>0</button>
        <button className='btn operator'>=</button>
        <button className='btn operator'>+</button>


      </div>
    )
  }
}
