import Redux from "redux"
import counterReducer from "./reducers/counterReducer"

const counterStore = Redux.createStore(counterReducer)

export default counterStore
