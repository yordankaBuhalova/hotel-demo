import React, {   }  from 'react';
import './App.css';
import Screen from './components/Screen.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import MediaQuery from "react-responsive";
import CustomCarousel from './components/CarouselComponent';

function App() {
  return (
    <div>
      <MediaQuery minWidth={1224}>
        <div className="App-header">
          <div className='App'>
            <Screen id="desktopview"/>
          </div>
        </div>
    </MediaQuery>

    <MediaQuery maxWidth={1224}>

      <CustomCarousel id="mobile"/>

    </MediaQuery>
    </div>
  );
}

export default App;
