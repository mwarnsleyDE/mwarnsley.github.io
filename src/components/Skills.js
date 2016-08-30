import React, { Component } from 'react';

class Skills extends Component{
  render(){
    return(
        <div className="profile-section">
          <h3 className="title">Skills</h3>
          <ul className="pills">
            <input type="checkbox" id="skills-expander-state-checkbox" className="expander-state-checkbox">
            <li className="skill">
              <a href="https://www.linkedin.com/topic/leadership?trk=pprofile_topic" title="Leadership">
                <span className="wrap">Leadership</span>
              </a>
            </li>
            <li className="skill">
              <a href="https://www.linkedin.com/topic/management?trk=pprofile_topic" title="Management">
                <span className="wrap">Management</span>
              </a>
            </li>
            <li className="skill">
              <a href="https://www.linkedin.com/topic/social-networking?trk=pprofile_topic" title="Social Networking">
                <span className="wrap">Social Networking</span>
              </a>
            </li>
            <li className="skill">
              <a href="https://www.linkedin.com/topic/microsoft-office?trk=pprofile_topic" title="Microsoft Office">
                <span className="wrap">Microsoft Office</span>
              </a>
            </li>
            <li className="skill">
              <a href="https://www.linkedin.com/topic/time-management?trk=pprofile_topic" title="Time Management">
                <span className="wrap">Time Management</span>
              </a>
            </li>
            <li className="skill"><a href="https://www.linkedin.com/topic/social-media?trk=pprofile_topic" title="Social Media"><span className="wrap">Social Media</span></a></li><li className="skill"><a href="https://www.linkedin.com/topic/account-management?trk=pprofile_topic" title="Account Management"><span className="wrap">Account Management</span></a></li><li className="skill"><a href="https://www.linkedin.com/topic/coaching?trk=pprofile_topic" title="Coaching"><span className="wrap">Coaching</span></a></li><li className="skill"><a href="https://www.linkedin.com/topic/html5?trk=pprofile_topic" title="HTML5"><span className="wrap">HTML5</span></a></li><li className="skill"><a href="https://www.linkedin.com/topic/css?trk=pprofile_topic" title="CSS"><span className="wrap">CSS</span></a></li><li className="skill"><a href="https://www.linkedin.com/topic/javascript?trk=pprofile_topic" title="JavaScript"><span className="wrap">JavaScript</span></a></li><li className="skill"><a href="https://www.linkedin.com/topic/jquery?trk=pprofile_topic" title="jQuery"><span className="wrap">jQuery</span></a></li><li className="skill"><a href="https://www.linkedin.com/topic/jquery-ui?trk=pprofile_topic" title="jQuery UI"><span className="wrap">jQuery UI</span></a></li><li className="skill"><a href="https://www.linkedin.com/topic/jquery-mobile?trk=pprofile_topic" title="jQuery Mobile"><span className="wrap">jQuery Mobile</span></a></li><li className="skill"><a href="https://www.linkedin.com/topic/bootstrap?trk=pprofile_topic" title="Bootstrap"><span className="wrap">Bootstrap</span></a></li><li className="skill see-more"><label for="skills-expander-state-checkbox" className="wrap">See 8+</label></li><li className="skill extra"><a href="https://www.linkedin.com/topic/asp%2Enet-mvc?trk=pprofile_topic" title="ASP.NET MVC"><span className="wrap">ASP.NET MVC</span></a></li><li className="skill extra"><a href="https://www.linkedin.com/topic/xhtml?trk=pprofile_topic" title="XHTML"><span className="wrap">XHTML</span></a></li><li className="skill extra"><a href="https://www.linkedin.com/topic/node%2Ejs?trk=pprofile_topic" title="Node.js"><span className="wrap">Node.js</span></a></li><li className="skill extra"><a href="https://www.linkedin.com/topic/react%2Ejs?trk=pprofile_topic" title="React.js"><span className="wrap">React.js</span></a></li><li className="skill extra"><a href="https://www.linkedin.com/topic/backbone%2Ejs?trk=pprofile_topic" title="Backbone.js"><span className="wrap">Backbone.js</span></a></li><li className="skill extra"><a href="https://www.linkedin.com/topic/git?trk=pprofile_topic" title="Git"><span className="wrap">Git</span></a></li><li className="skill extra"><a href="https://www.linkedin.com/topic/github?trk=pprofile_topic" title="Github"><span className="wrap">Github</span></a></li><li className="skill extra"><a href="https://www.linkedin.com/topic/tfs?trk=pprofile_topic" title="TFS"><span className="wrap">TFS</span></a></li><li className="skill see-less extra"><label for="skills-expander-state-checkbox" className="wrap">See less</label></li></ul><div className="translation-voter-wrap"><div className="translation-voter"><span>How's this translation?</span><ul className="voter-form"><li className="action option positive"><span className="action positive">Great</span></li><li className="separator">•</li><li className="action option negative"><span className="action negative">Has errors</span></li></ul></div><div className="translation-voter-response">Thanks for your help!</div></div>
        </div>
    );
  }
}

export default Skills;
