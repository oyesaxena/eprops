import React,{useEffect} from "react";
import { API } from "../backend";
import Base from "./Base";
import Menu from "./Menu";
import logo from "../images/photologo.jpg"
import './Homemin.css'
import background from '../images/background.jpg'
import marriage from '../images/marriages.jpg'
export default function Home() {
  
  return (
      <Base className="text-dark"> 
       <div class="container-fluid pl-0 pr-0">
       <Menu/>

         <div className="hero">
  {/* <img src={background} alt="Snow" className="img-responsive" style={{width:"100%"}}/> */}
  <div className="hero-copy text-dark">
  <div className="text-left" style={{paddingTop:'150px',
paddingLeft:"150px"
}}>
  <h1>Hey This Is Photographer</h1>
    <h4>Good experience in Photography.............</h4> 
  </div>
   
  </div>
  </div>

  <section id="services">
  <div className="container">
    <h1 className="text-dark">Our Services</h1>
    <div className="row services">
      <div className="col-md-4 text-center">
      <div className="icon">
        <i className="fa fa-desktop text-dark"></i>
      </div>
      <h3 className="text-dark">Photographer</h3>
      <p className="text-dark">As a phto Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any 
specified custom words) in the alt prop  </p>
    </div>
    <div className="col-md-4 text-center">
      <div className="icon">
        <i className="fa fa-desktop text-dark"></i>
      </div>
      <h3 className="text-dark">Photographer</h3>
      <p className="text-dark">As a phto Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any 
specified custom words) in the alt prop  </p>
    </div>
    <div className="col-md-4 text-center">
      <div className="icon">
        <i className="fa fa-desktop text-dark"></i>
      </div>
      <h3 className="text-dark">Photographer</h3>
      <p className="text-dark">As a phto Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any 
specified custom words) in the alt prop  </p>
    </div>
    </div>
    
  </div>
</section>
 {/* //Team members */}
 <section id="team">
   <div className="container">
     <h1>Our Team</h1>
     <div className="row">
       <div className="col-md-4 profile-pic text-center">
         <div className="img-box" >
           <img src={marriage} className="img-responsive" width="300px" height="400px"/>
           <ul>
             <a href="#"><li><i className="fa fa-facebook"></i></li></a>
             <a href="#"><li><i className="fa fa-instagram"></i></li></a>
             <a href="#"><li><i className="fa fa-twitter"></i></li></a>

           </ul>
         </div>
         <h2>Nikhil Satya</h2>
         <h3>Web developer</h3>
         <p className="text-dark">As a phto Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any 
specified custom words) in the alt prop  </p>
       </div>
       <div className="col-md-4 profile-pic text-center">
         <div className="img-box" >
           <img src={marriage} className="img-responsive" width="300px" height="400px"/>
           <ul>
             <a href="#"><li><i className="fa fa-facebook"></i></li></a>
             <a href="#"><li><i className="fa fa-instagram"></i></li></a>
             <a href="#"><li><i className="fa fa-twitter"></i></li></a>

           </ul>
         </div>
         <h2>Nikhil Satya</h2>
         <h3>Web developer</h3>
         <p className="text-dark">As a phto Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any 
specified custom words) in the alt prop  </p>
       </div>
       <div className="col-md-4 profile-pic text-center">
         <div className="img-box" >
           <img src={marriage} className="img-responsive" width="300px" height="400px"/>
           <ul>
             <a href="#"><li><i className="fa fa-facebook"></i></li></a>
             <a href="#"><li><i className="fa fa-instagram"></i></li></a>
             <a href="#"><li><i className="fa fa-twitter"></i></li></a>

           </ul>
         </div>
         <h2>Nikhil Satya</h2>
         <h3>Web developer</h3>
         <p className="text-dark">As a phto Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any 
specified custom words) in the alt prop  </p>
       </div>
     </div>
   </div>
 </section>

 {/* footer */}
<footer class="page-footer font-small special-color-dark pt-4">

  <div class="container">

    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1">
        <i class="fab fa-facebook"></i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1">
          <i class="fab fa-twitter"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mx-1">
          <i class="fab fa-google-plus-g"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1">
          <i class="fab fa-linkedin-in"> </i>
        </a>
      </li>
      
    </ul>

  </div>

  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://eprops.com/">Echo Vision Props</a>
  </div>

</footer>
</div>



              
            

           

            
     
  
      </Base>
   
  );
}