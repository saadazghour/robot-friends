import {

    CHANGE_SEARCH_FIELD,
    ROBOT_REQUEST_PENDING,
    ROBOT_REQUEST_SUCCESS,
    ROBOT_REQUEST_FAILED

} from './constants'


const initialState = {
    searchField: ''
}


export const search_Robots = (state= initialState, action= {}) => {
    // console.log(action.type);
    switch (action.type) {          // recommended switch, because we can have multiple actions
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })
            // return { ...state, { searchField: action.payload } }
        default:
            return state;
    }
}


const initialStateRequest = {
    robots: [],
    isPending: false,
    error: ''
}

export const requestRobots = (state= initialStateRequest, action= {}) => {
    switch (action.type) {
        case ROBOT_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true })
        case ROBOT_REQUEST_SUCCESS:
            return Object.assign({}, state, { robots: action.payload ,isPending: false })
            // return { ...state, { searchField: action.payload } }
        case ROBOT_REQUEST_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    }
}