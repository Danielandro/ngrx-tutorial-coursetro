import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import { Tutorial } from "../../models/tutorial.model";
// import * as TutorialActions from "../../actions/tutorial.action";
import * as TutorialActionsRefactor from "../../actions/tutorialRefactor.action";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  // method to dispatch add tutorial action
  addTutorial(name, url) {
    const newTutorial = { name, url } as Tutorial;
    // this.store.dispatch(TutorialActions.addTutorial({ tutorial }));
    this.store.dispatch(TutorialActionsRefactor.addTutorial({ tutorial: newTutorial }));
  }

}
