
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {apiReducer} from "../apicalls/reducer";
//import <example>Reducer from "./componentName/reducer.js";


export const initialState = {
    apiData : {
        musicObjs : [
            {
                query: '',
                results: []
            }
        ],
        albumObj : {},
        artistObj : {}
    }
    /*
    stateSliceName : {
        elements: []
    }

    anotherStateSliceName : {
        elements: []
    }
    */
};

// noinspection JSUnresolvedVariable
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const allEnhancers = composeEnhancers(applyMiddleware(thunk))
const allReducer = combineReducers({
    apiData : apiReducer,
    /*
    stateSliceName : <example>Reducer
    anotherStateSliceName :  <anotherExample>Reducer
   */
});

// noinspection JSCheckFunctionSignatures
export default createStore(
    allReducer,
    initialState,
    allEnhancers
);

//HOWTO
// in ./src/components/component/component.jsx

// import {connect} from 'react-redux'
// import { stuffAction } from './actions'
/*
const mapStateToProps  = state => ({
    propElementName: state.stateSliceName.ElementName
})
const mapDispatchToProps = dispatch => ({
    functionName: (data) => dispatch( stuffAction(data) )
})
*/
// ... CODE ...  how access global state and state-editing functions
// this.props.propElementName
// this.props.functionName() ,
// ... CODE ...
// export connect( mapStateToProps , mapDispatchToProps )( component )