
import React from 'react';
import ReactDOM from 'react-dom';
import EventsChild from './eventchild'
import {Link} from 'react-router-dom';

class Events extends React.Component{     

    mouseentered(event){
       
       alert('Mouse Entered')
    }
    clicked(event){       
    
    
        alert('Button Clicked');
    }

    render(){



        return( <div>
            <Link to="/">Home</Link> <br></br>
        <button id="btn1"  onClick={this.clicked}> 
          Click Me
        </button><br></br>

        <button id="btn1" onMouseEnter={this.mouseentered}> 
          Mouse Enter
        </button><br></br>

      
         <EventsChild />    

        </div>
        )
    }


}

export default Events;