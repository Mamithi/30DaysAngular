import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { EventComponet } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    EventComponet
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
