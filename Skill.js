import '../App.css';
import {Link} from "react-router-dom";

export default function Home(){
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
   <h2 className='text-success'> Technical Skills</h2>
        Programming languages ( Python, Java, C#)<br></br>
        Web development (HTML, CSS, JavaScript, JQuery, PHP,)<br></br>
        Database management (SQL, MongoDB, MySQL)(Node.js)<br></br>
        Framework (Angular js, React js, Vue js, Bootstrap)<br></br>
   </div><br/>
   <div className='tech-skill'>
    <h2 className='text-success'> Soft Skills</h2>
       Communication<br></br>
       Team collaboration<br></br>
       Problem-solving<br></br>
       Time management<br></br>
     </div> <br></br>
       <div className='tech-skill'>
      <h2 className='text-success'> Creative Skills</h2>
        Graphic design (Adobe Creative Suite, Canva)<br></br>
        Content creation (blog writing, video editing)<br></br>
        Social media management<br></br>
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