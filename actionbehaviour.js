import React from 'react';
import ReactDOM from 'react-dom';
class Behaviour extends React.Component{
    constructor(){
      super();

      this.state = {uidValue:' ', pwdValue:' ',slctValue:' '}
      this.changeHandler = this.changeHandler.bind(this);
      this.clickHandler = this.clickHandler.bind(this);

    }     
    clickHandler(e){
       e.preventDefault();
    alert(this.state.pwdValue +"\n"+this.state.uidValue +"\n"+this.state.slctValue);    

    }
    changeHandler(e){
       var target = e.target;   
     if(target.name == "uid"){

        this.setState({uidValue : target.value})
     }

     else if(target.name == "pwd"){
        this.setState({pwdValue : target.value})
     }

     else if(target.name=="slct"){
        this.setState({slctValue : target.value})
            }
    }
     render(){
        return(
           <>
           <form>
           <label>
           UID
           <input type="text" name="uid"  onChange={this.changeHandler} required></input>
           </label><br></br>
           <label>
           PWD
           <input type="password" name ="pwd" onChange={this.changeHandler} required></input>
           </label><br></br>
           Your are from:
           <select name="slct" onChange={this.changeHandler}>
           <option value="Australia">Australia</option>
           <option value="Aisa">Asia</option>
           <option value="South Africa">South Africa</option>
           <option value="North America">North America</option>
           <option value="South America">South America</option>
           <option value="Antarctica">Antarctica</option>
           <option value="Europe">Europe</option>
           </select> <br></br>
           <input type="submit" id="btn1" value="Submit" onClick={this.clickHandler}></input>
              </form>
           </>
           
        )
     }
     }
export default Behaviour;