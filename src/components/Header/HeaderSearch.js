import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class HeaderSearch extends Component{
  render(){
    return(
        <form id="global_search">
          <span id="hamburger" className="hamburger"><button id="el"></button></span>
          <input id="search" type="text" placeholder="Search for people, jobs, companies, and more..." />
          <button className="search_icon">ICON</button>
        </form>
    );
  }
}

export default HeaderSearch;
