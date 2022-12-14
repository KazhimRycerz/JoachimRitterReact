import { NavLink } from 'react-router-dom'
import JoachimRitter from '../components/JoachimRitter.js'
import './Home.scss'
import Lohhof from '../Images/Lohhof.jpg'
import BuchmitLicht from '../Images/buchMitLicht.png'
import Basis from '../Images/1200px-Fingerprint_picture.png'
import First from '../Images/IMG_3561.PNG'
import Second from '../Images/IMG_3556.PNG'
import Third from '../Images/IMG_3557.PNG'
import Fourth from '../Images/IMG_3558.PNG'
import Fifth from '../Images/IMG_3559.PNG'
import Sixth from '../Images/IMG_3560.PNG'
import Seventh from '../Images/IMG_3554.PNG'
import Eigth from '../Images/IMG_3679.PNG'
import Ninth from '../Images/IMG_3680.PNG'
import titelPLD88 from '../Images/PLD_80_Titel_D.jpg'
import LWLGT from '../Images/LWLGT.jpg'
import Logo_Qanat21 from '../Images/Qanat21_Logo_Q.png'
import HomePLD from '../Images/homepagePLDM.jpg'

const Home = () => (
    <div className="bg">
      <img className="bgimage" src="../Images/IMG_1839.PNG" alt=""/>
      <div className="content">
        <div className="box1"></div>
        <div className="box2">
          <h1 >Professional fingerprint</h1>
          <p id="motto">Living to work - instead of working to live</p>
        </div>
        <header className="box3">
         <JoachimRitter />
        </header>
        <div className="box4">
          <div>
            <img id="basis"   src={Basis} alt="" />
            <img id="first"   src={First} alt="" />
            <img id="second"  src={Second} alt="" />
            <img id="third"   src={Third} alt="" />
            <img id="fourth"  src={Fourth} alt="" />
            <img id="fifth"   src={Fifth} alt="" />
            <img id="sixth"   src={Sixth} alt="" />
            <img id="seventh" src={Seventh} alt="" />
            <img id="eigth"   src={Eigth} alt="" />
            <img id="ninth"   src={Ninth} alt="" />
          </div>
        </div>
        <div className="box5" id="box5home">
          <nav>
            <ul id="home_contens">
                <li><NavLink to ="/PersonalData" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" > <p><ion-icon name="finger-print-outline"></ion-icon></p> personal data</NavLink></li>
                <li><NavLink to ="/Motivation" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >   <p><ion-icon name="finger-print-outline"></ion-icon></p> professional philosophy and motivation</NavLink></li>
                <li><NavLink to ="/Career" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >       <p><ion-icon name="finger-print-outline"></ion-icon></p> career - how I met my ...</NavLink></li>
                <li><NavLink to ="/Experience" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >   <p><ion-icon name="finger-print-outline"></ion-icon></p> experience and professional impact</NavLink></li>
                <li><NavLink to ="/References" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >   <p><ion-icon name="finger-print-outline"></ion-icon></p> references</NavLink></li>
                <li><NavLink to ="/MyFuture" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >     <p><ion-icon name="finger-print-outline"></ion-icon></p> where I see my future</NavLink></li>
                <li><NavLink to ="/Contactandsocialmedia" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" ><p><ion-icon name="finger-print-outline"></ion-icon></p> contact and social media</NavLink></li>
            </ul>
          </nav>
        </div>
        <nav className="box6">
        <ul>
          <li>home /<br /> fingerprint</li>
          <li><NavLink to ="/PersonalData" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >personal data</NavLink></li>
          <li><NavLink to ="/Motivation" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >philosophy / <br />motivation</NavLink></li>
          <li><NavLink to ="/Career"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >carrer / <br />my way...</NavLink></li>
          <li><NavLink to ="/Experience"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >experience and <br />professional <br />impact</NavLink></li>
          <li><NavLink to ="/References"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >references</NavLink></li>
          <li><NavLink to ="/MyFuture"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >my future</NavLink></li>
          <li><NavLink to ="/ContactAndSocialMedia" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >contact and <br />social media</NavLink></li>
        </ul>
      </nav>
        <div className="box7">
          <figure id="myOrigin" hover-text="Journalism and light - 25 years of experience" >
            <img src={BuchmitLicht} alt="" />
          </figure>
          <figure id="PLDmagazine" hover-text="PLDmagazine - 20 years of publishing the leading literature in architectural lighting design">
            <img src={titelPLD88} alt="" />
          </figure>
          <figure id="GutLohof" hover-text="Daylight museum Gut Lohhof in Welver">
            <img id="nn3" src={Lohhof} alt="" />
          </figure>
          <figure id="PLDWebsite" hover-text="PLD modern webdesign for a trade magazine in architecture">
            <img src={HomePLD} alt="" />
          </figure>
          <figure id="Qanat21" hover-text="Qanat12: 2nd price of the Guide Innovation Award 2022 - Strategist for overall project" >
            <img src={Logo_Qanat21} alt="" />
          </figure>
          <figure id="LWLGT" hover-text="Lighting design on the occasion of the International Day of the Elimination of Violence against Women 2021">
            <img src={LWLGT} alt="" />
          </figure>
        </div>
        <div className="box8"></div>
        <div className="box9"></div>
        <footer className="box10">&copy; Joachim Ritter</footer>
        
      </div>
    </div>
)

    export default Home