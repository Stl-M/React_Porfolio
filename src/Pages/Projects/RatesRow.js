import React from 'react'

export default function RatesRow(props) {
    const {ratesOptions, selectedRate, onChangeRate, onChangeAmount, amount} = props
  return (
    <div className='rates-row'>
        <input type='number'  className='input' value={amount} onChange={onChangeAmount}/>
        <select value={selectedRate} onChange={onChangeRate}>
            {ratesOptions.map(option => (
                <option key={option} value={option}> {option} </option>
            ))}
            
        </select>
    
    </div>
  )
} 
