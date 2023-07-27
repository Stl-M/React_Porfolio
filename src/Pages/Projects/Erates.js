import { useEffect, useState } from 'react';
import './Erates.css';
import RatesRow from './RatesRow';


const RATES_URL = "https://api.exchangerate.host/latest"


export default function Erates() {

  const [ratesOptions, setRatesOptions] = useState([])
  const [fromRate, setFromRate] = useState()
  const [toRate, setToRate] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromRate, setAmountInFromRate] = useState(true)

  let toAmount, fromAmount 
  if(amountInFromRate) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else { 
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(RATES_URL)
    .then(res => res.json())
    .then(data => {
      const firstRate = Object.keys(data.rates)[0]
      setRatesOptions([data.base, ...Object.keys(data.rates)])
      setFromRate(data.base)
      setToRate(firstRate)
      setExchangeRate(data.rates[firstRate])
    })
  }, [])

  useEffect(() => {
    if (fromRate != null && toRate != null) {
      fetch(`${RATES_URL}?base=${fromRate}&symbols=${toRate}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toRate]))
    }
  }, [fromRate, toRate])

  function handleFromAmountchange(e) {
    setAmount(e.target.value)
    setAmountInFromRate(true)
  }
  function handleToAmountchange(e) {
    setAmount(e.target.value)
    setAmountInFromRate(false)
  }

  return (
    <div className='rates'>
      <h3>Convert</h3>

      <RatesRow 
        ratesOptions={ratesOptions}
        selectedRate= {fromRate}  
        onChangeRate= {e => setFromRate(e.target.value)}
        onChangeAmount={handleFromAmountchange}
        amount={fromAmount}
        />
      <div className='equals'> = </div>
      <RatesRow 
        ratesOptions={ratesOptions}
        selectedRate= {toRate}
        onChangeRate= {e => setToRate(e.target.value)}
        onChangeAmount={handleToAmountchange}
        amount={toAmount}
      />
    

    </div>
  )
}
