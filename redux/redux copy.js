// nodejs 환경에서 
const {createStore} = require("redux")


// applyMiddleware
// 2. combineReducers
// compose
// 1. createStore


// 상태를 넣고 상태를 바꿀 수 있는 함수

const initialState = {
    name:"sungjin",
    board:{
        list:[
            {
                idx:0,
                subject:"asge"
            }
        ]
    }
}

// 점점 길어져요
const reducer = (state = initialState,action) => { // action은 dispatch에서 받은 object
    // state값이 없으면 initialState로 해라
    switch(action.type){
        case "change_name" :
            return {
                ...state, // 불변성
                name: action.payload
            }
        case "change_subject":
            const newList = [...state.board.list]
            newList[0].subject = action.payload
            return {
                ...state,
                board:{
                    ...state.board,
                    list:[...newList]
                }
            }
        default :
            return initialState
    }
}

const store = createStore(reducer) // 상태, 상태변경 함수
// const [value,setValue] =  useState({name:"sungjin"})
// createStore가 reducer를 최초에 실행시킨다

console.log(store)
/*
    dispatch 상태 바꾼다
    getState state 가져옴
*/

console.log("initial name: ",store.getState()) // {name:"sungjin"}

store.dispatch({ type : "change_name" , payload:"sungjin2"}) // 안에 담겨있는게 action

console.log("changed name: ",store.getState()) // {name:"sungjin2"}

store.dispatch({type:"change_subject", payload:"subject2"})

console.log("changed name: ",store.getState().board.list) 

//const [state, dispatch] = useReducer(reducer,initialState)

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "change_name":{

        }
        case "change_subject":{

        }
        default :
            return state // 최초실행 때 실행
    }
}