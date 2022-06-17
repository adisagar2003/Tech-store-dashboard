import reducer from "./rootReducer";
import { createStore } from "redux";
import darkReducer from "./darkReducer";

const store = createStore(reducer)
const darkStore  =createStore(darkReducer)

export default  {store,darkStore};

