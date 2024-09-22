import '../App.css';
import {Link} from "react-router-dom";

export default function Project(){
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
    <div className='tech-skill'>
   <h4 className='text-success'> Portfolio Website</h4>
        <h4 className='text-secondary'>on process....</h4>
   </div><br/>
   <div className='tech-skill'>
    <h4 className='text-success'> E-comerce Website</h4>
    <h4 className='text-secondary'>on process....</h4>
     </div> <br></br>
       <div className='tech-skill'>
      <h4 className='text-success'> Loan Apply Website</h4>
      <h4 className='text-secondary'>Uploading process....</h4>
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