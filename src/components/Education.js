import React, { Component } from 'react';

class Education extends Component{
  render(){
    return(
        <div className="profile-section">
          <h3 className="title">Education</h3>
          <ul className="schools">
              <li className="school">
                  <header>
                      <h4 className="item-title">Free Code Camp</h4>
                      <h5 className="item-subtitle"><span className="translated translation" data-field-name="Education.DegreeName">Full Stack Web Development Certification, Computer Software Engineering</span><span className="original translation" data-field-name="Education.DegreeName">Full Stack Web Development Certification, Computer Software Engineering</span></h5></header>
                  <div className="meta"><span className="date-range"><time>2015</time>  –  <time>2016</time></span></div>
              </li>
              <li className="school">
                  <header>
                      <h5 className="logo"><a href="https://www.linkedin.com/edu/indiana-wesleyan-university%27s-adult-program-42306?trk=ppro_sprof"><img lazyload="true" className="lazy-loaded" alt="Indiana Wesleyan University's Adult Program" width="60" height="60" src="https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAlYAAAAJDgyODk1YjkzLTdmOGYtNDNiMi1hZTdlLTk2NmY5NjhmYTkzZg.png" /></a></h5>
                      <h4 className="item-title"><a href="https://www.linkedin.com/edu/indiana-wesleyan-university%27s-adult-program-42306?trk=ppro_sprof">Indiana Wesleyan Universitys Adult Program</a></h4>
                      <h5 className="item-subtitle"><span className="translated translation" data-field-name="Education.DegreeName">Business Information Systems, Management Information Systems, General, 3.7</span><span className="original translation" data-field-name="Education.DegreeName">Business Information Systems, Management Information Systems, General, 3.7</span></h5></header>
                  <div className="meta"><span className="date-range"><time>2013</time>  –  <time>2015</time></span></div>
              </li>
              <li className="school">
                  <header>
                      <h4 className="item-title">Carroll High School</h4>
                      <h5 className="item-subtitle"><span className="translated translation" data-field-name="Education.DegreeName">High School, Accounting and Finance, 3.2</span><span className="original translation" data-field-name="Education.DegreeName">High School, Accounting and Finance, 3.2</span></h5></header>
                  <div className="meta"><span className="date-range"><time>2001</time>  –  <time>2005</time></span></div>
              </li>
          </ul>
        </div>
    );
  }
}

export default Education;
