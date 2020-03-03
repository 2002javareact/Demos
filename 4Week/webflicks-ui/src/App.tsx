import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MessageComponent } from './components/message-component/MessageComponent'
import { AddingComponent } from './components/adding-component/AddingComponent';
import { ClickerComponent } from './components/clicker-component/ClickerComponent';


// 1 a component is either a function or a class
// 2 a component must start with a capital letter
// 3 you must return some jsx
// 4 that jsx can only have 1 root level tag
function App() {

  // function components just return (jsx)
  return (
    <div className="App">
      <ClickerComponent/>
      <p>This is adding some html to a react component</p>
      <MessageComponent message={"This is a passed in message demo"}/>
      <MessageComponent message={'Some string'} />
      <AddingComponent x={10} y={100}/>
    </div>
  );
}

export default App;
