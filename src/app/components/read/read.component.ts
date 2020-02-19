import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store'; // store
import { Tutorial } from "../../models/tutorial.model"; // Tutorial model
import { AppState } from "../../app.state";
import * as TutorialActions from "../../actions/tutorial.action";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  tutorials$: Observable<Tutorial[]>; // we'll display this in the template
  constructor(private store: Store<AppState>) {
    // access the store. Select "tutorial" which is defined as a property on AppModule
    // this calls the tutorialReducer and returns the state aka initial state
    this.tutorials$ = store.select("tutorial");

  }

  ngOnInit(): void {
  }

  delTutorial(index) {
    // this.store.dispatch(new TutorialActions.RemoveTutorial(index));
    this.store.dispatch(TutorialActions.removeTutorial({ tutorialIndex: index }));
  }
}
