import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventComponent } from './Event/event/event.component';
import { EventCreateUpdateComponent } from './Event/event-create-update/event-create-update.component';
import { ActivityComponent } from './Activity/activity/activity.component';
import { ActivityCreateUpdateComponent } from './Activity/activity-create-update/activity-create-update.component';
import { EventManagerComponent } from './Event/event-manager/event-manager.component';
import { ActivityManagerComponent } from './Activity/activity-manager/activity-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventCreateUpdateComponent,
    ActivityComponent,
    ActivityCreateUpdateComponent,
    EventManagerComponent,
    ActivityManagerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
