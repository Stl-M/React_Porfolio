import './contacts.css'
import { Link } from 'react-router-dom';
import * as  IonIcons  from 'react-icons/io'

export default function Contacts() {
  return (
    <div className='contact'>
                  <div className='kard'>
                    <h2>Get in Touch</h2>
                    <p><IonIcons.IoIosCall /> +49 1522 546 2082 </p>
                    <p><IonIcons.IoIosMailUnread /> stellanmungai@gmail.com </p>
                    <p><IonIcons.IoIosPin /> Germany </p>
                    <p><Link to='https://github.com/Stl-M' ><i class="fa-brands fa-github"></i>  GitHub</Link></p>
                    <p><Link to='https://www.linkedin.com/in/stella-mungai/'><i class="fa-brands fa-linkedin"></i>  Linkedin</Link></p> 
                  </div> 
    </div>  
    
  )
}


/* <div className='contact'>
     <div className='get'>
      <h3>Get in Touch</h3>
        <p><Link to='https://www.linkedin.com/in/stella-mungai/'><i class="fa-brands fa-linkedin"></i>  Linkedin</Link></p>
        
        <p><Link to='https://github.com/Stl-M' ><i class="fa-brands fa-github"></i>  GitHub</Link></p>
       
        </div>
    </div>  */