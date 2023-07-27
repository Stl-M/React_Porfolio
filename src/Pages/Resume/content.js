import { useState } from "react";


export default function Content({title, content}) {
    const [ show, setShow ] = useState(false)
  return (
    <>
        <section className="box"> 
            <header>
                <h4> {title} </h4>
                <button className="btn" onClick={() => setShow(!show)}> {show ? '-' : '+'} </button>
                
            </header>
            <p> {show ? content : ''} </p>
        </section>
    </>
  )
}
