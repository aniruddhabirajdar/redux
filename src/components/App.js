import React from 'react';
// import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import Sidebar from "./common/Sidebar"
import HeaderText  from "./common/HeadText"

function App() {
  return (
    
    <div className="container-fluid">
    <div className="row">
    
    <Header />
    <Sidebar />
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
      <HeaderText />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
      <Route component={PageNotFound} />
    </Switch>
    </main>
    </div>
  </div>
  );
}

export default App;
