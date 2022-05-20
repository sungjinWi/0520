// nodejs 환경에서 
const {createStore} = require("redux")
const rootReducer = require("./reducers")

const store = createStore(rootReducer) // 상태, 상태변경 함수

console.log(store.getState())
