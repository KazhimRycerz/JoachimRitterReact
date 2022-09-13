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
          <img src="./Images/Joachim_privat.JPG" alt="Joachim Ritter" />
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
        <article className="article_mp">
            <h2>Why I do what I do</h2>
            <p>Enjoying your professional work sounds very unusual or even crazy. But I am not crazy. I jenoy to fill my live with .</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt molestiae voluptate facere vero! Provident mollitia quod nulla dicta, dolores quas, nihil, numquam odio perferendis quis dignissimos modi odit ipsam illo exercitationem a enim neque temporibus perspiciatis maiores voluptates dolorem nemo illum nobis. Sit tempora earum dolorem culpa? Quam temporibus pariatur soluta neque laudantium fugiat obcaecati sequi, eum necessitatibus iste cupiditate, nemo architecto ratione tenetur suscipit possimus magni vel molestiae cum. Dolores dolor facilis eaque quo atque. Fugit a perferendis, suscipit ipsam labore veniam tempora optio tempore nisi assumenda architecto cumque eius sequi? Blanditiis quibusdam odit molestiae nesciunt. Quia, possimus perspiciatis.</p>
        </article>
      </div>
      <nav className="box6">
        <ul>
          <li><NavLink to ="/Home" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >home /<br /> fingerprint</NavLink></li>
          <li><NavLink to ="/PersonalData" onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >personal data</NavLink></li>
          <li className="motivation"> philosophy / <br />motivation</li>
          <li><NavLink to ="/Career"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >carrer / <br />my way...</NavLink></li>
          <li><NavLink to ="/Experience"  onMouseEnter="lightTopicOn()" onMouseLeave="lightTopicOff()" >experience and <br />professional impact</NavLink></li>
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