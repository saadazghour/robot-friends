import { CHANGE_SEARCH_FIELD } from './constants'

const initialState = {
    searchField: ''
}


export const serch_Robots = (state= initialState, action= {}) => {
    switch (action.type) {          // recommended switch, because we can have multiple actions
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })
            // return { ...state, { searchField: action.payload } }
        default:
            return state;
    }
}