import { Action, createReducer, on } from "@ngrx/store";
import { Tutorial } from "../models/tutorial.model";
import * as TutorialActions from "../actions/tutorialRefactor.action";

// define initial app state
const initialState: Tutorial[] = [{
  name: "Initial Tutorial",
  url: "http://skysports.com"
}];

export const reducerRefactor = createReducer<Tutorial[]>(
  initialState,
  on(TutorialActions.addTutorial, (state, action) => ([...state, action.tutorial])),
  on(TutorialActions.removeTutorial, (state, action) => (state.filter(item => item !== state[action.tutorialIndex])))
);
