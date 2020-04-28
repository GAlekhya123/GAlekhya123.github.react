import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>MultiSkill Trainer(APSSDC)</h1>

            <hr/>

          <p>Raptor | Python  | MachineLearning | HTML/CSS | Scilab|</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/alekhya-ganji-82b479131/" rel="noopener noreferrer" >
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="mailto:alekhya.g@apssdc.in" rel="noopener noreferrer" >
            <i className="fa fa-envelope" aria-hidden="true" />
          </a>

          

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;