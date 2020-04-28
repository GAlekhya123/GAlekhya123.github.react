import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://raw.githubusercontent.com/GAlekhya123/GAlekhya123.github.io/master/images/ALEKHYA.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>G Alekhya</h2>
            <h4 style={{color: 'grey'}}>Multi Skill Trainer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am having 3 years experience as a trainer in APSSDC.
I am Self Motivated and interested to share my Knowledge and skills to students.
Trained more than 1500 Students  in 3 years and also
i am  passinate to learn new Skills.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>APSSDC,Tadepalli,Vijaywada</p>
            <h5>Phone</h5>
            <p>8328363233</p>
            <h5>Email</h5>
            <p>alekhya.g@apssdc.in</p>
           
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2013}
              endYear={2017}
              
              schoolName="B.Tech(Sri Venkateswara College of Engineering and Technology)"
              

              schoolDescription="Electronics and Communication Engineering is a branch of engineering that deals with the researching, designing, developing and testing of electronic equipment and engineering problems related to electronics, computer, telecommunication system, and related industries"
               />

               <Education
                 startYear={2011}
                 endYear={2013}
                 schoolName="NRI Junior Kalsala"
                 schoolDescription="I completed by Intermediate from 2011 to 2013."
                  />
                  <Education
                 startYear={2011}
                 endYear={2010}
                 schoolName="Siddhartha EM School"
                 schoolDescription="I completed my ssc in 2011."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            

              <Experience
                startYear={2017}
                endYear={2020}
                jobName="MultiSKill Trainer"
                jobDescription="I am having 3 years experience as a trainer in APSSDC.
                I am Self Motivated and interested to share my Knowledge and skills to students.
                Trained more than 1500 Students  in 3 years and also
                i am  passinate to learn new Skills."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Raptor"
                progress={90}
                />
                <Skills
                  skill="Python"
                  progress={90}
                  />
                  
                  <Skills
                    skill="Machine Learning"
                    progress={60}
                    />
                    <Skills
                      skill="HTML/CSS"
                      progress={60}
                      />
                      <Skills
                      skill="Scilab"
                      progress={90}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;