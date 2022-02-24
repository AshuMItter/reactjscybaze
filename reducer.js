
import { incNumber } from "./action";
import { decNumber } from "./action";

const initialState = 0;


const changeTheNumber = (state= initialState, action) =>{
    switch(action.type){
        case 'Inc' : return state +5;
        case 'Dec' : return state -5;
        default : return state;
    }
}
export default changeTheNumber;