import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Home from "pages/home"
import WineDescription from "pages/wine_description"
import "./style.css"

const App = () => (
  <BrowserRouter>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/description/:id" element={<WineDescription />} />
        </Routes>
   
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
