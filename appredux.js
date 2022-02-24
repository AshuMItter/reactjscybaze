import React from 'react';
import store from './store';
import {useSelector, useDispatch} from 'react-redux';
import { decNumber, incNumber } from './action';
import changeTheNumber from './reducer';

const Appone = () =>{

const mystate = useSelector((state)=>state.changeTheNumber);

const dispatch = useDispatch();
    return (

        <div>
            <button onClick={() => dispatch(incNumber())}  >
        Increment
       </button>
            <input type="text" style={{color:'green',fontSize:'30px',backgroundColor:'ActiveCaption'}} value={mystate}></input>
       
       <button onClick={() => dispatch(decNumber())}  >
        Decrement
       </button>
        </div>
    )
}
export default Appone
