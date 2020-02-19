import { Injectable } from "@angular/core"; // use to make store globally available
import { createAction, props } from "@ngrx/store"; // for state management
import { Tutorial } from "../models/tutorial.model"; // model for tutorials

// action names
export const ADD_TUTORIAL = "[TUTORIAL] Add";
export const REMOVE_TUTORIAL = "[TUTORIAL] Remove";

// refactor using createAction()
export const addTutorial = createAction(
  ADD_TUTORIAL,
  props<{ tutorial: Tutorial; }>()
);

export const removeTutorial = createAction(
  REMOVE_TUTORIAL,
  props<{ tutorialIndex: number; }>()
);
