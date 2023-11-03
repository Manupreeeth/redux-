import {  legacy_createStore } from "redux";
import { rootReducer } from "../reducer";
 export  let store= legacy_createStore(rootReducer)