// redux-actions
/*
redux
redux-action
immer
*/

// const { createAction } = require("redux-actions") 

// const CHANGE_SUBJECT = "change_subject"

// const change_subject = (payload) => {type:CHANGE_SUBJECT, payload}
// dispatch(change_subject())

// const changeName = createAction("change_subject")

// changeName.toString() // type 안에 들어간 string

const CHANGE_SUBJECT = "change_subject"


const initialState = {
    list:[
        {
            idx:0,
            subject:"asge"
        }
    ]
}

const boardReducer = (state = initialState,action) => {
    switch(action.type){
        case CHANGE_SUBJECT:{
            const newList = [...state.list]
            newList[0].subject = action.payload
            return state
        }
        default :
            return state
    }
}

module.exports = boardReducer


/*

react-redux / provider :provider - strore, 최상단에 넣는다 useSelector:getState useDispatch

*/