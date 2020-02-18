import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { reducer } from "./reducers/tutorial.reducer";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: reducer // use our reducer as the root reducer for store
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
