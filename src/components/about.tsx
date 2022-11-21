import '../App.css';
import { CCard, CCardBody,CCardImage, CRow, CCol, CCardTitle, CCardText } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

const About = () => {
    return (
        <div className='know_me_better'>
           <div className='about'>
                <b><h2> About Me </h2></b>
            </div>
            <CCard className="mb-3" style={{ maxWidth: '1100px', backgroundColor: "#2c3333" }}>
                <CRow className="g-0">
                    <CCol md={4}>
                    <CCardImage src="./gradwtc.jpg" style={{height: "100%"}}/>
                    </CCol>
                    <CCol md={8}>
                    <CCardBody>
                        <CCardText>
                            <p className='bio'>Hey!!. My name is Adonis, I graduated from WethinkCode and the University of Johannesburg, and I will finish my honors degree at the end of 2023. I am a person who handles issues clearly and analytically. I work hard and I really think that if something can be learned, nothing can stop me from learning it.</p>
                            <p className='bio'>I started working as a volunteer at a shelter named "Kids Heaven" during my senior year of high school, where I taught computer literacy to the children who were interested. I really appreciated the work since it allowed me to teach someone else and reinforce the ideas by having to think about them in new ways as I tried to make the students understand. I have developed my communication and interpersonal abilities by taking part in these numerous elements. Additionally, I've been able to hone my problem-solving abilities when the normal and typical way of doing things is no longer effective.</p>
                            <p className='bio'>I think I'm a perfect fit for the SOVTECH graduate program since I uphold the principles of the organization. I enjoy technology, I am daring, I am a team player, and I am continuously learning and adapting.</p>
                        </CCardText>
                    </CCardBody>
                    </CCol>
                </CRow>
            </CCard>
        </div>
    );
}

export default About;