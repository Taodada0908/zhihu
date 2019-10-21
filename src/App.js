import React from 'react';
import './assets/css/app.css'
import head from './head.jpg'

import Router from './router/public'
import index from  './router/index'

function App() {
  return (
    <div className="App">
      {/*<img className="head" src={head} alt=""/>*/}
      <Router routes={index}/>
    </div>
  );
}

export default App;
