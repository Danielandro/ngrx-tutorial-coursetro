import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import { Tutorial } from "../../models/tutorial.model";
import * as TutorialActions from "../../actions/tutorial.action";
import { Observable } from "rxjs/Observable";

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
    this.store.dispatch(new TutorialActions.AddTutorial({ name, url }));
  }

}
