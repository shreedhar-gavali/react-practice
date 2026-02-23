import React ,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from'./components/functionalState';
import MyComponent from './components/secondFunctionalState';
import Welcome from './components/classComponent';
import Name from './components/useProps';
import Text from './components/usestate';
import Counter from './components/setCounter';
function App() {
  return (
    
    <div class="App">
      <Greet  />                                        
      <MyComponent />
      <Welcome />
      <Name fname="krishna"  lname="Gavali"> <p>children props</p> </Name>
       <Text/>
       <Counter />
    </div>
  );
}

export default App;
