import React from 'react';
import ReactDOM from 'react-dom';


class Form extends React.Component{

    constructor(){
        super();
        this.state ={value:' '}
        this.handlechange = this.handlechange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }

   handlechange(event){
    this.setState(function(preState,prop){
       return {
           value : event.target.value
       }
    })
   }
   handlesubmit(e){
   //  e.preventDefault();
   
   
    // alert(this.state.value);
   }


    render(){
         return   (
           <div>
 
<form>
  <label>
    Name:
    <input type="text" name="q" onChange={this.handlechange} />

  </label>
  <input type="submit" value="Submit" onClick={this.handlesubmit} />
</form>
</div>
             )


    }
}
export default Form;