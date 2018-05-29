/**
 * Created by emugisha on 5/18/2018.
 */
import C from '../constants'

const color = (state={}, action)=>{
    if(action.type == C.ADD_COLOR){
        return {
            id:action.id,
            title:action.title,
            color:action.color,
            rating:0,
            timestamp:action.timestamp
        }
    }else if (action.type == C.RATE_COLOR){
        return state.id !== action.id ? state :{...state,rating:action.rating}
    }else{
        return state;
    }
}

export default color;