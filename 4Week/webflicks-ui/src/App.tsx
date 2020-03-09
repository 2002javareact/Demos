import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { MessageComponent } from './components/message-component/MessageComponent'
import { AddingComponent } from './components/adding-component/AddingComponent';
import { ClickerComponent } from './components/clicker-component/ClickerComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MultiRouteComponent } from './components/multi-route-component/MultiRouteComponent';
import NavBarComponent from './components/navbar-component/NavBarComponent';
import { ChuckNorrisJokeComponent } from './components/chuck-norris-component/ChuckNorrisJokeComponent';
import { LoginComponent } from './components/login-component/LoginComponent';
import { User } from './models/User';

// 1 a component is either a function or a class
// 2 a component must start with a capital letter
// 3 you must return some jsx
// 4 that jsx can only have 1 root level tag
function App() {

  const [currentUser, updateUser] = useState(new User('','',0, '','',''))
  // function components just return (jsx)
  return (
    <div className="App">

      <Router>
        <NavBarComponent />
        {/* switch is very easy. Only one route in a switch will ever be rendered
        whichever route has the first matching path, it gets rendered */}
        <Switch>
          {/* Provides history match and location to a component
        but does not allow for it to have its own props */}
          <Route path='/clicker' render={(props)=><ClickerComponent {...props} currentUser={currentUser}/>} />
          {/* this allows for the component to have its own props
        but does not provide history match or location */}
          <Route path='/adding'>
            <AddingComponent x={10} y={100} />
          </Route>
          <Route path='/multiple' component={MultiRouteComponent} />
          <Route path='/chucknorris' component={ChuckNorrisJokeComponent}/>
          <Route path='/login' render={()=><LoginComponent updateUser={updateUser}/>}/>
          {/* the most powerful of the 3 models
        it allows us to pass whatever props from router we want, any of history location and match
        it also allows for us to pass in any other props */}
          <Route path='/' render={(props) => <MessageComponent history={props.history} match={props.match} location={props.location} message={'An example of the render design pattern for components'} />} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
