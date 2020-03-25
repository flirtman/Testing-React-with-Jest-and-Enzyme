import React from 'react';
import Header from './components/header';
import Headline from './components/headline';
import './App.scss';

const tempArr = [{
  fname: 'ilia',
  lName: 'svinin',
  email: 'iliasvinin@gmail.com',
  age: 24,
  onlineStatus: true
}];

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Headline 
          header={'Posts'} 
          desc="Click the button to render the post."
          tempArr={tempArr}
        />
      </div>
    </div>
  );
}

export default App;
