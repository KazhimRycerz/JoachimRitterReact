import { NavLink } from 'react-router-dom'
import './ContactAndSocialMedia.scss'

const ContactAndSocialMedia = () => (
  <div className="bg">
    <img className="bgimage" alt="" src="../Images/IMG_1839.PNG" />
    <div className="content">
      <div className="box1"></div>
      <div className="box2">
        <h1 >Contact and Social Media</h1>
      </div>
      <header className="box3">
        <figure> 
          <img src="./Images/Joachim_privat.JPG" alt="Joachim Ritter" />
          <figcaption>Joachim Ritter</figcaption>
        </figure>
      </header>
      <div className="box4">
        <div>
          <img id="basis" src="Images/1200px-Fingerprint_picture.png" alt="" />
          <img className="first" src="./Images/IMG_3679.PNG" alt="" />
        </div>
      </div>  
      <div className = "box5">
        <article>
          <h2>Contact or just follow. You decide. Press <ion-icon name="finger-print-outline"></ion-icon></h2>
          <ul>
            <li><a href="mailto:jritter@via-internet.com"><i alt="" class="fa-regular fa-envelope"></i><p>My e-mail for professional issues...</p></a></li>
            <li><a href="https://github.com/KazhimRycerz/" alt="" target="_blank"><ion-icon name="logo-github"></ion-icon><p>My professional activity in coding...</p></a></li>
            <li><a href="https://www.NavLinkedin.com/in/joachimr/" alt="" target="_blank"><ion-icon name="logo-Linkedin"></ion-icon><p>My professional network in lighting design...</p></a></li>
            <li><a href="https://www.xing.com/profile/Joachim_Ritter19/" alt="" target="_blank"><ion-icon name="logo-xing"></ion-icon><p>My xing-account - just starting...</p></a></li>
            <li><a href="https://www.instagram.com/ritter_joachim/" alt="" target="_blank"><ion-icon name="logo-instagram"></ion-icon><p>Enjoy my pictures...</p></a></li>
            <li><a href="https://twitter.com/RitterJoachim/" alt="" target="_blank"><ion-icon name="logo-twitter"></ion-icon><p>Some of my opinions...</p></a></li>
            <li><a href="https://www.facebook.com/joachim.ritter.31/" alt="" target="_blank"><ion-icon name="logo-facebook"></ion-icon><p>My private network...just in case...</p></a></li>
            <li><a href="skype:jritter_43/"><ion-icon name="logo-skype"></ion-icon><p>For deeper collaboration and communication...</p></a></li>
            <li><a href="slack:Joachim Ritter"><ion-icon name="logo-slack"></ion-icon><p>or slacking...</p></a></li>
            <li><a href=""><ion-icon name="videocam-outline"></ion-icon><p>or zoom...</p></a></li>
            <li><a href=""><p>or just the traditional way ... </p></a></li>
          </ul>
        </article>
      </div>
      <nav className="box6">
        <ul>
          <li><NavLink to ="/Home" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >home /<br /> fingerprint</NavLink></li>
          <li><NavLink to ="/PersonalData" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >personal data</NavLink></li>
          <li><NavLink to ="/Motivation" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >philosophy / <br />motivation</NavLink></li>
          <li><NavLink to ="/Career"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >carrer / <br />my way...</NavLink></li>
          <li><NavLink to ="/Experience"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >experience and <br />professional impact</NavLink></li>
          <li><NavLink to ="/MyFuture"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >my future</NavLink></li>
          <li className="contactandsocialmedia">contact and <br />social media</li>
        </ul>
      </nav>
      <div className="box7">
        <figure><img id="buchMitLicht" src="./Images/buchMitLicht.png" alt="" /></figure>
        <figure><img id="nn2" src="./Images/buchMitLicht.png" alt="" /></figure>
        <figure><img id="nn3" src="./Images/buchMitLicht.png" alt="" /></figure>
        <figure><img id="nn4" src="./Images/buchMitLicht.png" alt="" /></figure>
        <figure><img id="nn5" src="./Images/buchMitLicht.png" alt="" /></figure>
        <figure><img id="nn6" src="./Images/buchMitLicht.png" alt="" /></figure>
      </div>
      <div className="box8"></div>
      <div className="box9"></div>
      <footer className="box10">&copy; Joachim Ritter</footer>   
    </div>
  </div>
  )

    export default ContactAndSocialMedia