import cv from './Resume/cv/cv.pdf'

import * as  IonIcons  from 'react-icons/io'



export default function About() {

  return (
    <div className='about'>
      
      <button className="cv"><a href={cv} downlaod ><h3>Download Resume </h3><IonIcons.IoIosCodeDownload className='down'/></a></button>
      

    <div className='accordion-container'>
      <div>
        <input id='tabone' name='summary' type='checkbox'/>
        <label for='tabone'>Summary</label>
        <div className='accordion-inner'>
          <p>In this section, I used a simple CSS Accordion to briefly highlight my Résume, which is available for download above.</p>
          <p>Feel free to contact me and I will gladly share with you my comprehensive Résume. </p>
          
        </div>
      </div>
      
      <div>
        <input id='tabtwo' name='skills' type='checkbox'/>
        <label for='tabtwo'>Relevant Skills</label>
        <div className='accordion-inner'>
          <p> HTML /CSS </p>
          <p> JavaScript / jQuery / React.js </p>
          <p> MongoDB / Mongoose </p>
          <p> Node / Express.js </p>
        </div>
      </div>

      <div>
        <input id='tabthree' name='experience' type='checkbox'/>
        <label for='tabthree'>Professional Experience</label>
        <div className='accordion-inner'>
          <p>Supervisor Finance | Exchange AG Deutschland.</p>
          <p>Real Estate Financial Analyst</p>
      
        </div>
      </div>

      

      {/* <img className='img' src={profpic} alt='' /> */}

      

      
      
  </div>
  </div>
    )
  
}

