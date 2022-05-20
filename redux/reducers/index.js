const { combineReducers } = require("redux")
const boardReducer = require("./boardReducer")

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


const rootReducer = combineReducers({ // 함수를 풀어서 객체로
    board:boardReducer,
    name:(state,action)=>{
        return "sungjin"
    }
})

module.exports = rootReducer