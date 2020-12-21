import './App.css';
import React from "react";
import NavBarComponent from "./components/NavBar/NavBarComponent";
import ImgsComponent from "./components/Section/ImgsComponent";
import {Redirect, Route} from "react-router-dom";
import GroupComponent from "./components/Group/GroupComponent";

function App() {
  return (
    <div className="App">
      <div className="NavBar">
          <NavBarComponent />
      </div>
      <div className="AllImgs">
          <Route path={'/all'} render={() => <ImgsComponent/>}/>
          <Route path={'/group'} render={() => <GroupComponent/>}/>
          <Redirect form={'/'} to={'/all'}/>
      </div>
    </div>
  );
}

export default App;
