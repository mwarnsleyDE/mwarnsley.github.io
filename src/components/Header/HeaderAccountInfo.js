import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class HeaderAccountInfo extends Component{
  render(){
    return(
        <div className="last_section_header">
          <ul className="account-info">
            <li className="messages">M</li>
            <li className="notifications">N</li>
            <li className="network">N</li>
            <li className="settings">S</li>
          </ul>
        </div>
    );
  }
}

export default HeaderAccountInfo;
