import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Groups from './components/Groups';
import Skills from './components/Skills';
import TopCard from './components/TopCard';

const App = () => {
  return(
    <div>
      <Header />
      <div id="main_content_wrapper">
        <div id="profile">
          <TopCard />
          <Experience />
          <Skills />
          <Education />
          <Groups />
        </div>
        <div id="side_panel">

        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('portfolio'));
