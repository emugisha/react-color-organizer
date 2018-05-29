/**
 * Created by emugisha on 5/18/2018.
 */
import C from '../constants'
import Color from './color'
const colors = (state=[],action)=>{
    switch(action.type){
        case C.ADD_COLOR:
            return [...state,Color({},action)]
        case C.RATE_COLOR:
            return state.map(c=>Color(c,action));
        case C.REMOVE_COLOR:
            return state.filter(c=>c.id !== action.id)
        default:
            return state
    }
}

export default colors;