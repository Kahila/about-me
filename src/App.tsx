import './App.css';
import Header from './components/header';
import About from './components/about';
import Education from './components/education_card';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <div className='App-body'>
          <div className='page'>
            <Header></Header>
            <h1> Adonis Kahila Kalombo </h1><br />
            <About></About><br />
            <div className='about'>
              <b><h3> Education </h3></b>
              <div className='skills'>
                <Education image="./uj.png" schoolName="University of Johannesburg" qualification="BSc in Computer Science and Informatics" year="(Feb 2018 - Dec 2021)"/>
                <Education image="./wtc.png" schoolName="We Think Code" qualification="Software Development" year="(May 2019 - May 2021)"/>
                <Education image="./uj.png" schoolName="University of Johannesburg" qualification="BScHons in Computer Science (part time)" year="(Feb 2021 - Dec 2023)"/>
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
                <Skills language="C programming" percentage="75" image="./c.png"></Skills>
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
      </body>
    </div>
  );
}

export default App;
