/**
 * Created by emugisha on 5/18/2018.
 */
import colors from './reducers/colors'
import sort from './reducers/sort'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import Sort from './sort-constants';
import C from './constants';
import {v4} from 'uuid';

const logger = store =>next =>action=>{
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state',store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result;
}

const initialState = {
    colors:[
        {id: "5ae28c52-d9e3-471d-966f-c944f583e579", title: "Aboki", color: "#008080", rating: 0, timestamp: 1526659468188},
        {id: "6a204aac-1a9a-485b-9779-62d6881ba9db", title: "Gucci", color: "#ff8080", rating: 0, timestamp: 1526659496118},
        {id: "ea5fb2d4-8dbf-42b8-8d72-69c056ccb54a", title: "Blaze", color: "#ffff00", rating: 0, timestamp: 1526659509845},
        {id: "aa386173-288f-46bd-a832-6f0eb6ec40ed", title: "fine", color: "#808040", rating: 0, timestamp: 1526661243415}
    ],
    sort:Sort.SORTED_BY_TITLE
}

const saver = store=>next=>action =>{
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState());
    return result;
}

const storeFactory = (initState = initialState) =>applyMiddleware(logger, saver)(createStore)(combineReducers({colors, sort}),
    (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']): initState)

export default storeFactory;

export const removeColor = id =>({type:C.REMOVE_COLOR, id});

export const rateColor = (id,rating)=>({type:C.RATE_COLOR,id,rating})

export const sortColors = sortedBy=>
    sortedBy === "rating"?({type:C.SORT_COLORS,sortBy: Sort.SORTED_BY_RATING}): sortedBy ==="title"? ({type:C.SORT_COLORS,sortBy:Sort.SORTED_BY_TITLE, }):
        ({type:C.SORT_COLORS, sortBy:Sort.SORTED_BY_TIMESTAMP});

export const addColor = (title,color)=>({type:C.ADD_COLOR,id:v4(),title,color,timestamp:new Date().getTime()})