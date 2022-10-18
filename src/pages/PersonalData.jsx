import { NavLink } from 'react-router-dom'
import JoachimRitter from '../components/JoachimRitter.js'
import './PersonalData.scss'
import BuchmitLicht from '../Images/buchMitLicht.png'
import Basis from '../Images/1200px-Fingerprint_picture.png'
import First from '../Images/IMG_3561.PNG'
import treeInRed from '../Images/tree_in_red.jpg'

const PersonalData = () => (
  <div className="bg">
    <img className="bgimage" src="../Images/IMG_1839.PNG" alt="" />
    <div className="content">
      <div className="box1"></div>
      <div className="box2">
        <h1 >Personal data</h1>
        {/* <p>Learn about Joachim Ritter as a private person</p> */}
      </div>
      <header className="box3">
      <JoachimRitter />
      </header>
      <div className="box4">
        <div>
          <img id="basis" src={Basis} alt="" />
          <img className="first" src={First} alt="" />
        </div>
      </div>  
      <div className="box5" id="box5pd">
        <article className="article_pd">
          <h2>Learn about Joachim Ritter as a private person</h2>
            <table>
              <colgroup>
                  <col width="20%" />
                  <col width="30%" />
              </colgroup>
              <tr>
                  <td>address</td>
                  <td>Marienfelder Str. 18   <br /> 33330 Gütersloh  </td>
              </tr>
              <tr>
                  <td>date of birth</td>
                  <td>30. March 1962</td>
              </tr>
              <tr>
                  <td>place of birth</td>
                  <td>Herzebrock-Clarholz/DE</td>
              </tr>
              <tr>
                  <td>children over 18</td>
                  <td>three, aged 43, 36 and 33</td>
              </tr>
              <tr>
                  <td>grand-children</td>
                  <td>six</td>
              </tr>
              <tr>
                  <td>private activities</td>
                  <td>sport, cooking, photography, literature, further education, Norway</td>
              </tr>
            </table>       
          </article>
      </div>
      <nav className="box6">
          <ul>
            <li><NavLink to ="/Home" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >home /<br /> overview</NavLink></li>
            <li className="personalData">personal data </li>
            <li><NavLink to ="/Motivation" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()">philosophy / <br />motivation</NavLink></li>
            <li><NavLink to ="/Career"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()">career / <br />my way...</NavLink></li>
            <li><NavLink to ="/Experience"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()">experience and <br />professional <br />impact</NavLink></li>
            <li><NavLink to ="/References"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >references</NavLink></li>
            <li><NavLink to ="/MyFuture"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()">my future</NavLink></li>
            <li><NavLink to ="/ContactAndSocialMedia" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >contact and <br />social media</NavLink></li>
          </ul>
      </nav>
      <div className="box7">
        <figure><img id="buchMitLicht" src={BuchmitLicht} alt="" /></figure>
        <figure id="myPhotoHobby" hover-text="Photo taken by JR and designed"><img  src={treeInRed} alt="Photo hobby: my Tree" /></figure>
        <figure><img id="nn3" src={BuchmitLicht} alt="" /></figure>
        <figure><img id="nn4" src={BuchmitLicht} alt="" /></figure>
      </div>
      <div className="box8"></div>
      <div className="box9"></div>
      <footer className="box10">&copy; Joachim Ritter</footer>   
    </div>
  </div>
)

    export default PersonalData