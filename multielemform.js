import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css'
import {Link} from 'react-router-dom';

class MultiElemForm extends React.Component{
   constructor(){
       super()
       this.state ={username:' ', password:' ',isLoogedIn:false}
       this.handlechange = this.handlechange.bind(this);
       this.handlesubmit = this.handlesubmit.bind(this);
   }
 
   handlechange(event){

   const target = event.target;
   if (target.type=== 'checkbox' && target.checked){
       this.setState({isLoogedIn:true})
   }
  else if (target.type=== 'checkbox' && target.checked == false){
    this.setState({isLoogedIn:false})
}
else if(target.name =='uid'){
    this.setState({username: target.value})
}
else if(target.name=='pwd'){
    this.setState({password : target.value})
}
    
}
 

 handlesubmit(event){
    
    event.preventDefault();

    
     alert(this.state.password+" "+this.state.username+" "+this.state.isLoogedIn);


 }

    

    render(){
         return(
            
        <div className='container'>
           
         <form>
             
      <div className='form-group'>
          <input type="text" name="uid"  onChange={this.handlechange}  className='form-control' placeholder="user name"></input>
          

      </div>
      <div className='form-group'>
      
          <input type="text" name="pwd"  onChange={this.handlechange} className='form-control' placeholder="password"></input>
          

      </div>
      
      <div class="form-check">
  <input class="form-check-input" name="chk" type="checkbox" onChange={this.handlechange} id="flexCheckDefault"></input>
  <label class="form-check-label" for="flexCheckDefault">
   Keep me logged In
  </label>
  </div>
      <div className='form-group'>
      
      
      <input type="submit" value="Submit" onClick={this.handlesubmit} className='form-control btn btn-success'></input>
  </div>
 
    
     
         </form>
         </div>
        
         )
        
    }
}
export default MultiElemForm;