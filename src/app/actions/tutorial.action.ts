import { Injectable } from "@angular/core"; // use to make store globally available
import { Action, createAction, props } from "@ngrx/store"; // for state management
import { Tutorial } from "../models/tutorial.model"; // model for tutorials

// action names
export const ADD_TUTORIAL = "[TUTORIAL] Add";
export const REMOVE_TUTORIAL = "[TUTORIAL] Remove";

// use Action interface to create two actions
// each has an action type (readOnly)
// They are also instatiated with a payload
// For Add, it'll be a Tutorial i.e. name & url
// For Remove, it'll be a number (possibly representing an index)
// export class AddTutorial implements Action {
//   readonly type = ADD_TUTORIAL; // requred property of Action

//   constructor(public payload: Tutorial) { }
// }

// export class RemoveTutorial implements Action {
//   readonly type = REMOVE_TUTORIAL;

//   constructor(public payload: number) { }
// }

// refactor using createAction()
export const addTutorial = createAction(
  ADD_TUTORIAL,
  props<{ tutorial: Tutorial; }>()
);

export const removeTutorial = createAction(
  REMOVE_TUTORIAL,
  props<{ tutorialIndex: number; }>()
);

// export type Actions = AddTutorial | RemoveTutorial; // union type. Actions can be either type

