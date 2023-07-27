import '../Pages/Projects/Home.css'
import home from './Projects/image/home.PNG'
import Typewriter from "typewriter-effect"

export default function Home() {
  return (
            <>
            
              <div className='container'>
                <div className='drop' >
                    <div className='content' >
                      <img src={ home } style={{width: '350px', height: '350px'}} alt='' />
                    </div>
                </div>
                
                <div className='drop' style={{color: '#01b4ff'}}>
                  <div className='content'>
                    <h3>Hey!</h3>
                    <h1>
                      <Typewriter
                        style={{fontSize: '800', fontWeight: '800px'}}
                        options={{
                        strings: ["I'm Stella..", "a Full Stack Web Developer,", "and a Data Scientist."],
                        autoStart: true,
                        loop: true,
                        }}
                      />
                    </h1> 
                  </div>
                </div>
              </div>
             
            </>         
          
  )
}
