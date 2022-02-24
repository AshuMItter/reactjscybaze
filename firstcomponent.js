import React from 'react';
import ReactDOM from 'react-dom';
import SecondComponent from './secondcomponent';
import ThirstComponent from './thirdcomponent';
import FirstComponent1 from './firstjsxcomponent';
import {Link} from 'react-router-dom';
import './bootstrap.css'

//var val = <h1> Hello World</h1>
class FirstComponent extends React.Component{
    

    render(){
  
        return (
            
                     <div>
                         <p>
                             {this.props.myage}
                         </p>
                         <ul class="nav justify-content-center nav-tabs">
  <li class="nav-item ">
  <Link to="hi">/hi</Link>
  <p></p>
  </li>
  <li class="nav-item">
  <Link to="hello">/hello</Link>
  </li>
  <li class="nav-item">
  <Link to="hihello">/hihello</Link>
  </li>
  <li class="nav-item">
  <Link to="routing">/routing</Link>
  </li>
</ul>
                        
                      </div>
                          

           
       
        )
            
    }
}

export default FirstComponent;