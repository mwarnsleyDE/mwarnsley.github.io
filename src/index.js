import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/Header';

const App = () => {
  return(
    <div>
      <Header />
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('portfolio'));
