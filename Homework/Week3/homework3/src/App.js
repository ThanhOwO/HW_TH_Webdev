
import './App.css';

function App() {
  return (
    <>
      <div class = "navbar">
        <div class="profile" id="about">
          <h1>PROFILE</h1>
          <span>I'm a student</span>
        </div>
      </div>

      <div class="container">
        <div class="Menu">
          <div id="toggle"></div>
          <div id="items">
            <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skill">Skills</a></li>
          <li><a href="#languages">Languages</a></li>
          </ul>
        </div>
      </div>
  
 

  <div class="firstbox">
    <div class="aboutme" >
      <h2>About me</h2>
      <span>I am a lovely cat. I have passion in IT and I want to become a professional developer.</span>
    </div>
    <img src="https://a.pinatafarm.com/312x296/ae7f8ccd22/sad-thumbs-up-cat.jpg/m/522x0" alt="" />
    <div class="details">
        <h2>Details</h2>
        <span class="title">Name:</span>
        <span> Le Sy Thanh</span>
        <span class="title">Age:</span>
        <span> 21</span>
        <span class="title">Location:</span>
        <span> UIT, VNU-HCM</span>
    </div>
  </div>

  <div class="secondbox" id="experience"> 
    <div class="title">
      <h1>Experience</h1>
    </div>
    <div class="content">
      <hr/>
      <h2>Educations</h2>
      <div class="box">
        <div class="ct">
          <h3>UIT, VNU-HCM</h3>
          <p>Apr 2019 - June 2024</p>
        </div>
        <div class="text">
          <h4>Information System</h4>
          <p>The education was mainly System design-basic course, but I also learned about Web, Data analysis and more. During my time in college, I specialized in OOP, data science. Now, I'm learning web development.</p>
        </div>
      </div>
        <hr/>
        <h2>Working Experiences</h2>
      <div class="box">
        <div class="ct">
          <h3>Facebook | Fresher Engineer</h3>
          <p>Sep 2021 - current</p>
        </div>
        <div class="text">
          <h4>Part - Fresher Web Developer</h4>
          <p>Working as a Fresher Developer on a dating function on Facebook page. Dating function is an app as Tinder.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="thirdbox"> 
    <div class="title">
      <h1>Abilities</h1>
    </div>
    <div class="content">
      <hr/>
      <h2>Skills</h2>
      <div class="box1" id="skill">
        <ul>
          <li>
            <p class="skill_title">HTML/CSS</p>
            <div class="progress-bar">
              <div class="progress hc-progress"></div>
            </div>
          </li>
          <li>
            <p class="skill_title">SQL</p>
            <div class="progress-bar">
              <div class="progress s-progress"></div>
            </div>
          </li>
          <li>
            <p class="skill_title">JQuery</p>
            <div class="progress-bar">
              <div class="progress j-progress"></div>
            </div>
          </li>
          <li>
            <p class="skill_title">JavaScript</p>
            <div class="progress-bar">
              <div class="progress js-progress"></div>
            </div>
          </li>
          <li>
            <p class="skill_title">Object Oriented Programming</p>
            <div class="progress-bar">
              <div class="progress oop-progress"></div>
            </div>
          </li>
          <li>
            <p class="skill_title">SEO</p>
            <div class="progress-bar">
              <div class="progress se-progress"></div>
            </div>
          </li>
          <li>
            <p class="skill_title">React</p>
            <div class="progress-bar">
              <div class="progress rt-progress"></div>
            </div>
          </li>
        </ul>
      </div>
        <hr/>
        <h2>Languages</h2>
        <div class="box1" id="languages">
          <ul>
            <li>
              <p class="skill_title">Vietnamese (Native)</p>
              <div class="progress-bar">
                <div class="progress V-progress"></div>
              </div>
            </li>
            <li>
              <p class="skill_title">English (IELTS 6.5)</p>
              <div class="progress-bar">
                <div class="progress E-progress"></div>
              </div>
            </li>
            <li>
              <p class="skill_title">Cat (Mother Tongue)</p>
              <div class="progress-bar">
                <div class="progress C-progress"></div>
              </div>
            </li>
            <li>
              <p class="skill_title">Dog (My enemy)</p>
              <div class="progress-bar">
                <div class="progress D-progress"></div>
              </div>
            </li>
          </ul>
        </div>
    </div>
  </div>
</div>
    </>
  );
}

export default App;
