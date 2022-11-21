import './App.css';
import Header from './components/header';
import About from './components/about';
import Education from './components/education_card';
import Skills from './components/skills';
import Typed from "react-typed";
import {SocialIcon} from 'react-social-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <div className='App-body'>
          <div className='page'>
            <div className='top-section'>
              <Header></Header>
              <h1> Hey!!, I'm Adonis </h1>
              <h5><Typed strings={["Software developer 💻", "Gamer 🕹️", "Somewhat of an athlete ⏱️", "Penetration tester"]} loop typeSpeed={50} backSpeed={50}/></h5>
              <h5>
                <SocialIcon url='https://twitter.com' bgColor='white' style={{width:40, height: 40, margin:12}} />
                <SocialIcon url='https://facebook.com'bgColor='white' style={{width:40, height: 40, margin:12}} />
                <SocialIcon url='https://github.com' bgColor='white' style={{width:40, height: 40, margin:12}} />
              </h5>
            </div>

            <div className='bottom-section'>
              <About></About><br />
              <div className='about'>
                <b><h2> Education </h2></b>
                <div className='skills'>
                  <Education schoolName="University of Johannesburg" qualification="BSc in Computer Science and Informatics" year="(Feb 2018 - Dec 2021)"/>
                  <Education schoolName="We Think Code" qualification="Software Development" year="(May 2019 - May 2021)"/>
                  <Education schoolName="University of Johannesburg" qualification="BScHons in Computer Science (part time)" year="(Feb 2021 - Dec 2023)"/>
                </div>
                <br />
                <b><h3> Work Experience </h3></b>
                <div className='skills'>
                  <Education image="./ab.jpeg" schoolName="African Bank" qualification="Software Developer Intern" year="(Feb 2020 - Jul 2020)"/>
                  <Education image="./uj.png" schoolName="University of Johannesburg" qualification="Academic Tutor" year="(Feb 2021 - Nov 2021)"/>
                  <Education image="./bb.png" schoolName="BrandBook South Africa" qualification="Software Developer Intern" year="(Feb 2021 - Dec 2023)"/>
                </div>
                <br />
                <b><h3> Skills </h3></b>
                <div className='skills'>
                  <Skills language="C programming" percentage="75" image="./c.png"></Skills><br />
                  <Skills language="C++" percentage="45" image="./c++.png"></Skills>
                  <Skills language="Visual Basic" percentage="75" image="./vb.png"></Skills>
                  <Skills language="SQL" percentage="60" image="./sql.png"></Skills>
                  <Skills language="Flutter" percentage="65" image="./dart.png"></Skills>
                  <Skills language="Java" percentage="50" image="./java.png"></Skills>
                  <Skills language="React Native" percentage="35" image="./rn.png"></Skills>
                  <Skills language="Strapi" percentage="35" image="./strapi.jpg"></Skills>
                  <Skills language="TypeScript" percentage="60" image="./ts.png"></Skills>
                  <Skills language="JavaScript" percentage="65" image="./js.png"></Skills>
                  <Skills language="Assembly x86" percentage="45" image="./asm.jpg"></Skills>
                  <Skills language="Python" percentage="75" image="./python.png"></Skills>
                </div>
                <br /><br />
            </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
