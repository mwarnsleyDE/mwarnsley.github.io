import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class HeaderSearch extends Component{
  render(){
    return(
        <form>
          <span></span>
          <input id="search" type="text" placeholder="Search for people, jobs, companies, and more..." />
          <button></button>
        </form>
    );
  }
}

export default HeaderSearch;
