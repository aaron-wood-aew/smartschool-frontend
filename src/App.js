import React from 'react';
import LoginForm from './components/auth/loginUser';
import Banner from './components/bannerComponent/bannerHomeComponent'
import RegisterForm from './components/auth/RegisterUser';
import RegisterStudentForm from './pages/registerStudentPage';
import HomePage from './pages/Home'
import PublicRoute from './pages/Home'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './pages/Dashboard'
import AboutPage from './pages/About'
import TeacherPage from './pages/Teacher'
import CreateClass from './pages/CreateClass'
import EditClass from './pages/EditClass'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Banner />
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path='/registerstudent' component={RegisterStudentForm}/>
          <Route exact path='/teacher' component={TeacherPage}/>
          <Route exact path='/teacher/createclass' component={CreateClass}/>
          <Route exact path='/teacher/:id/editclass' component={EditClass}/>
          <Route restricted={false} component={HomePage} exact path="/" />
          <Route restricted={false} component={LoginForm} exact path="/login" />
          <Route exact path='/about' component={AboutPage}/>
          <Route exact path='/register' component={RegisterForm}/>
          <Route exact path='/login' component={LoginForm}/>
        </Switch>
      </Router>
    </div>
  );

}

export default App;