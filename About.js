import '../App.css';
import {Link} from "react-router-dom";

export default function About(){
    return(
        <>
        <div className='container-fluid '>
      <div className='nav1'></div>
        <div className='nav '>
        <Link to='/' className='home '><i class="fa fa-home"/>Home</Link>
        <Link to='/Skill' className='skill '><img src='skill.png' alt='skill' className='skill-img'/>Skills</Link>
        <Link to='/Project' className='project '><img src='project.png' alt='project' className='project-img'/>Project</Link>
        <Link to='/About'className='about '><img src='about.png' alt='about' className='about-img'/>About</Link>
        <Link to='/Contact'className='contact '><img src='contact.png' alt='contact' className='contact-img'/>Contact</Link>
       
        
    </div>
    <marquee className='text-danger'>!This website development time 5:48mins! </marquee>
   <div className='about-details'>
   <h2 className='text-success'> About Us</h2>

Welcome to my portfolio! I’m Dhanushkumar,<br></br>
 a passionate web developer currently pursuing my diploma in Web Designing at Tamil Nadu Government Polytechnic College
  in Madurai. <br></br>As a third-year student, 
  I have honed my skills in various web technologies and design principles, <br></br>
  allowing me to create engaging and user-friendly websites.

My journey in web development <br></br>is fueled by a strong desire to blend creativity with technology. 
I’m dedicated to learning and evolving in this dynamic field,<br></br>
 always seeking new challenges and opportunities to enhance my skills.
 </div>
    <center> 
       <h4 className='icons text-dark'> 

       <a href='https://github.com/dhanush-kumar-9677' className='githup'>
           <i class="icon4  fa fa-github p-3"/>
        </a>
       <a href='https://www.facebook.com/share/kdoQwtY8K6qnjCB6/?mibextid=qi2Omg' className='facebook'>
           <i class="icon1 fa fa-facebook-f p-3"/>
        </a>
       <a href='https://www.instagram.com/i_obito.x?igsh=cmZzNzNyZmRkYzR3' className='insta'>
           <i class=" icon2 fa fa-instagram p-3"/> 
        </a>
       <a href='https://api.whatsapp.com/send?phone=+919677951089' className='whatsapp'>
           <i class=" icon3 fa fa-whatsapp p-3"/> 
           
        </a>
      
       </h4> 
       </center>
       <footer className='row text-center '>
        <hr></hr>
           <span className='col-4'>&#169;All Rights Reserved.</span> <span className='col-4'>Developed By P DHANUSHKUMAR</span><span className='col-4 pl-5'><i class="fa fa-envelope"></i>ddk3793@gmail.com</span>
        </footer>

        </div>
        
        
        </>

    );
}