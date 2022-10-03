import { NavLink } from 'react-router-dom'
import './Home.scss'

const Home = () => (
    <div className="bg">
      <img className="bgimage" src="../Images/IMG_1839.PNG" alt=""/>
      <div className="content">
        <div className="box1"></div>
        <div className="box2">
          <h1 >Professional fingerprint</h1>
          <p>Living to work - instead of working to live</p>
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
            <img id="basis" src="./Images/1200px-Fingerprint_picture.png" alt="" />
            <img id="first" src="./Images/IMG_3561.PNG" alt="" />
            <img id="second" src="./Images/IMG_3556.PNG" alt="" />
            <img id="third" src="./Images/IMG_3557.PNG" alt="" />
            <img id="fourth" src="./Images/IMG_3558.PNG" alt="" />
            <img id="fifth" src="./Images/IMG_3559.PNG" alt="" />
            <img id="sixth" src="./Images/IMG_3560.PNG" alt="" />
            <img id="seventh" src="./Images/IMG_3554.PNG" alt="" />
            <img id="eigth" src="./Images/IMG_3679.PNG" alt="" />
            <img id="ninth" src="./Images/IMG_3680.PNG" alt="" />
          </div>
        </div>
        <div className="box5">
          <nav>
            <ul id="home_contens">
                <li><NavLink to ="/PersonalData" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" ><p><i className="fa-solid fa-arrow-right-long fapd"></i></p> personal data</NavLink></li>
                <li><NavLink to ="/Motivation" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" ><p><i className="fa-solid fa-arrow-right-long famo"></i></p> professional philosophy and motivation</NavLink></li>
                <li><NavLink to ="/Career" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" ><p><i className="fa-solid fa-arrow-right-long faca"></i></p> career - how I met my ...</NavLink></li>
                <li><NavLink to ="/Experience" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" ><p><i className="fa-solid fa-arrow-right-long faex"></i></p> experience and professional impact</NavLink></li>
                <li><NavLink to ="/References" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" ><p><i className="fa-solid fa-arrow-right-long fafu"></i></p> references</NavLink></li>
                <li><NavLink to ="/MyFuture" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" ><p><i className="fa-solid fa-arrow-right-long fafu"></i></p> where I see my future</NavLink></li>
                <li><NavLink to ="/Contactandsocialmedia" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" ><p><i className="fa-solid fa-arrow-right-long faco"></i></p> contact and social media</NavLink></li>
            </ul>
          </nav>
        </div>
        <div className="box6"></div>
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

    export default Home