/**
 * Created by emugisha on 5/18/2018.
 */

import C from '../constants';
const sort =(state="SORT_BY_DATE",action)=>{
    switch (action.type){
        case C.SORT_COLORS:
            return action.sortBy;
        default:
            return state;
    }
}
export default sort;