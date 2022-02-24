import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './firstcomponent';
import SecondComponent from './secondcomponent';
import ThirstComponent from './thirdcomponent';
import FirstComponent1 from './firstjsxcomponent';
import Temp from './temp';
import  App  from './app';
import { BrowserRouter, Routes } from 'react-router-dom';
import Events from './events';
import ComponentState from './componentstate'

import Form from './form';
import SelecOptionForm from './formoptionselect';

import MultiElemForm  from './multielemform';
import ComponentStateChild from './componentstatechild';

import {
    HashRouter,
    Route    
   } from 'react-router-dom';
   
import { Link } from 'react-router-dom';
import ThirdComponent from './thirdcomponent';
import ABC from './statecomponent';
import MyEventDemo1 from './edemo';



import MyEventDemo from './myeventdemo';

import FormDemonstration from './formdeonstration';

import Behaviour from './actionbehaviour';

import Appone from './appredux';

import store from './store';
import {Provider} from 'react-redux';
//console.log(store.getState());

/*
function tick(){
const element = (
    <div>
      <h1>Hello, world!</h1> <br></br>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
  
 
   ReactDOM.render(
  <HashRouter>        
  <Routes>  
  
  <Route exact path="/" element={<FirstComponent/>} />
  <Route path="/hi" element={<Form />} />
  <Route path="/hello" element={<Behaviour/>} />
  <Route path="/hihello" element={<MultiElemForm/>} />
  <Route path="/routing" element={<Events/>} />
 
  </Routes>

  
  </HashRouter>  
    
    
     ,
   document.getElementById('root'));


//setInterval(tick, 1000);
    
*/
ReactDOM.render(
<Provider store={store}>
<Appone />
</Provider>, document.getElementById('root') );


