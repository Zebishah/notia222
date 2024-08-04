import { combineReducers } from "redux";
import NotesReducer from "./NotesReducer";

const rootReducer = combineReducers({
  NotesReducer: NotesReducer,
});

export default rootReducer;
