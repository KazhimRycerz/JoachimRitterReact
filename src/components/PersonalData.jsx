import { NavLink } from 'react-router-dom'
import './PersonalData.scss'

const PersonalData = () => (
  <div className="bg">
    <img className="bgimage" src="../Images/IMG_1839.PNG" alt="" />
    <div className="content">
      <div className="box1"></div>
      <div className="box2">
        <h1 >Personal data</h1>
        <p>Learn about Joachim Ritter as a private person</p>
      </div>
      <header className="box3">
        <figure> 
          <img src="./Images/Joachim_privat.JPG" alt="Joachim Ritter" />
          <figcaption>Joachim Ritter</figcaption>
        </figure>
      </header>
      <div className="box4">
        <div>
          <img id="basis" src="./Images/1200px-Fingerprint_picture.png" alt="" />
          <img className="first" src="./Images/IMG_3561.PNG" alt="" />
        </div>
      </div>  
      <div className="box5">
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
                  <td>sport, cooking, reading, literature, further education, Norway</td>
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
            <li><NavLink to ="/Experience"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()">experience and <br />professional impact</NavLink></li>
            <li><NavLink to ="/MyFuture"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()">my future</NavLink></li>
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

    export default PersonalData