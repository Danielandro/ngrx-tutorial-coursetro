import { Action, createReducer, on } from "@ngrx/store";
import { Tutorial } from "../models/tutorial.model";
import * as TutorialActions from "../actions/tutorial.action";

// define initial app state
const initialState: Tutorial[] = [{
  name: "Initial Tutorial",
  url: "http://skysports.com"
}];

// Define the reducer - takes state and action as arguments
// Set initial state
// Set valid types for actions
// action: TutorialActions.Actions
export function reducer(state: Tutorial[] = initialState, action: any) {
  // //check type of action
  // switch (action.type) {
  //   // if type = "[TUTORIAL] Add", return [current state + new tutorial]
  //   case TutorialActions.ADD_TUTORIAL:
  //     return [...state, action.payload];
  //   case TutorialActions.REMOVE_TUTORIAL:
  //     return state.filter((tutorial, index) => tutorial !== state[action.payload]);
  //   // return current state by default if action type doesn't match any cases
  //   default: return state;
}


// const tutorialReducer = createReducer(
//   initialState,
//   on(TutorialActions.ADD_TUTORIAL, (state, {tutorial} => ([...state, action.payload])))
// )

export const reducer2 = createReducer<Tutorial[]>(
  initialState,
  on(TutorialActions.addTutorial, (state, action) => ([...state, action.tutorial])),
  on(TutorialActions.removeTutorial, (state, action) => (state.filter(item => item !== state[action.tutorialIndex])))
);


