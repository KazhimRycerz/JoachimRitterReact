import { NavLink } from 'react-router-dom'
import './Motivation.scss'

const Motivation = () => (
  <div className="bg">
      <img className="bgimage" src="../Images/IMG_1839.PNG" alt=""/>
    <div className="content">
      <div className="box1"></div>
      <div className="box2">
        <h1 >Professional philosophy / Motivation</h1>
        {/* <p>Why I do what I do</p> */}
      </div>
      <header className="box3">
        <figure> 
          {/* <img id="JRserious" src="./Images/Joachim_serious.jpg" alt="Joachim Ritter" /> */}
            {/* <img id="JRprivate"src="./Images/Joachim_privat.JPG" alt="Joachim Ritter" /> */}
            <figcaption>Joachim Ritter</figcaption>
        </figure>
      </header>
      <div className="box4">
        <div>
          <img id="basis" src="Images/1200px-Fingerprint_picture.png" alt="" />
          <img className="second" src="Images/IMG_3556.PNG" alt="" />
        </div>
      </div>  
      <div className = "box5">
        <article className="box5_mp">
            <h2>Why I do what I do</h2>
            <div id="motivation_JR">
              <p>Enjoying your professional work sounds very unusual or even crazy. But I am not crazy. I enjoy to fill my live with things I can develop and be satisfied width.</p>
              <p>Working from 8 to 17.00 is not what I believe in. When I caught fire for something and am really burning to learn and use my skills. </p>
              <p>Mostly I feeel attracked by project which are new and not existing on the market. Therefore it is necessary to understand humans, the society and business-structures. I believe in the revolution of the digitalisation, although I am also able to see risks and negative developments which I can deal with and continiously adapt my believes and convictions   </p>
              <p>Therefore I am also proud of my current career and experience as a 
              </p>              
                <ul>
                  <li>journalist</li>
                  <li>translator</li>
                  <li>managing director</li>
                  <li>event manager</li>
                  <li>museum manager</li>
                  <li>full stack webdeveloper</li>
                </ul>
              <p>All of these were of my interest and I believe that they are linked and led to better results in my professional career. And this is not to end as my age and priavte status is not asking me to stop enjoying my professional path...</p>
            </div>

        </article>
      </div>
      <nav className="box6">
        <ul>
          <li><NavLink to ="/Home" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >home /<br /> fingerprint</NavLink></li>
          <li><NavLink to ="/PersonalData" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >personal data</NavLink></li>
          <li className="motivation"> philosophy / <br />motivation</li>
          <li><NavLink to ="/Career"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >carrer / <br />my way...</NavLink></li>
          <li><NavLink to ="/Experience"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >experience and <br />professional <br />impact</NavLink></li>
          <li><NavLink to ="/References"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >references</NavLink></li>
          <li><NavLink to ="/MyFuture"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >my future</NavLink></li>
          <li><NavLink to ="/ContactAndSocialMedia" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >contact and <br />social media</NavLink></li>
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

    export default Motivation