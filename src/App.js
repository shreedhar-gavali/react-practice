import React ,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from'./components/functionalState';
import MyComponent from './components/secondFunctionalState';
import Welcome from './components/classComponent';
import Name from './components/useProps';
import Text from './components/usestate';
import Counter from './components/setCounter';
import Form from './components/form';
import Hookcounter from './components/hookCounter';
import form from './components/form';
function App() {
  return (
    
    <div class="App">
      {/* <Greet  />                                        
      <MyComponent />
      <Welcome />
      <Name fname="krishna"  lname="Gavali"> <p>children props</p> </Name>
       <Text/>
       <Counter />
      <Hookcounter /> */}
      <Form/>

    </div>
  );
}

export default App;
