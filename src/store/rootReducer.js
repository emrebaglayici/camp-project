import cartReducer from "./reducers/cartReducer";
import { combineReducers } from "redux";

//tüm stateleri topladığımız yer
const rootReducer=combineReducers({
    cart:cartReducer,
})

export default rootReducer;