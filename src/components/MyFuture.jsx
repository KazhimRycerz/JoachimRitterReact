import { NavLink } from 'react-router-dom'
import './MyFuture.scss'

const MyFuture = () => (
  <div className="bg">
    <img className="bgimage" src="../Images/IMG_1839.PNG" alt="" />
    <div className="content">
      <div className="box1"></div>
      <div className="box2">
        <h1 >Where I see my future</h1>
        <p>The journey is the reward</p>
      </div>
      <header className="box3">
        <figure> 
          <img src="./Images/Joachim_privat.JPG" alt="Joachim Ritter" />
          <figcaption>Joachim Ritter</figcaption>
        </figure>
      </header>
      <div className="box4">
        <div>
          <a href=""><img id="basis" src="Images/1200px-Fingerprint_picture.png" alt="" /></a>
          <a><img className="sixth" src="./Images/IMG_3560.PNG" alt="" /></a>
        </div>
      </div>  
      <div className = "box5">  
        <article className="box5_mf">
            <h2>Still enjoying challenges</h2>
            <p> I still enjoy developing new ideas an  Meine Pläne sind noch nicht beendet. Ich lebe, um zu Arbeiten und arbeite nicht, um zu leben. lorem jlkj lkhj jh gouzg lghljkhlkj hlkjhlkjhlkj hlkjguzt f ztfk hg lglglk lkjhkj hlkjhlkjhlkjh lkjlkjhlkjhlkh lorem jlkj lkhj jh gouzg lghljkhlkj hlkjhlkjhlkj hlkjguzt f ztfk hg lglglk lkjhkj hlkjhlkjhlkjh lkjlkjhlkjhlkh. lorem jlkj lkhj jh gouzg lghljkhlkj hlkjhlkjhlkj hlkjguzt f ztfk hg lglglk lkjhkj hlkjhlkjhlkjh lkjlkjhlkjhlkh</p>
            <p> lorem jlkj lkhj jh gouzg lghljkhlkj hlkjhlkjhlkj hlkjguzt f ztfk hg lglglk lkjhkj hlkjhlkjhlkjh lkjlkjhlkjhlkh</p>
            <p> lorem jlkj lkhj jh gouzg lghljkhlkj hlkjhlkjhlkj hlkjguzt f ztfk hg lglglk lkjhkj hlkjhlkjhlkjh lkjlkjhlkjhlkh</p>
        </article>
      </div>
      <nav className="box6">
        <ul>
          <li><NavLink to ="/Home" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >home /<br /> fingerprint</NavLink></li>
          <li><NavLink to ="/PersonalData" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >personal data</NavLink></li>
          <li><NavLink to ="/Motivation" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >philosophy / <br />motivation</NavLink></li>
          <li><NavLink to ="/Career"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >carrer / <br />my way...</NavLink></li>
          <li><NavLink to ="/Experience"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >experience and <br />professional impact</NavLink></li>
          <li className="myfuture"> my future</li>
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

    export default MyFuture