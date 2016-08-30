import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import HeaderSearch from './HeaderSearch';

class Header extends Component{
  render(){
    return(
      <header id="header">
            <div className="header_wrapper">
              <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
              <HeaderSearch />
            </div>      
      </header>
    );
  }
}

export default Header;
