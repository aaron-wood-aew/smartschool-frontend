import React from 'react';
import LoginForm from './components/login/loginPage';
import Banner from './components/bannerComponent/bannerHomeComponent'
import RegisterForm from './pages/RegisterUser';
import RegisterStudentForm from './pages/registerStudentPage';
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import TeacherPage from './pages/Teacher'
import CreateClass from './pages/CreateClass'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Banner />
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/about' component={AboutPage}/>
          <Route exact path='/register' component={RegisterForm}/>
          <Route exact path='/login' component={LoginForm}/>
          <Route exact path='/registerstudent' component={RegisterStudentForm}/>
          <Route exact path='/teacher' component={TeacherPage}/>
          <Route exact path='/teacher/createclass' component={CreateClass}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;