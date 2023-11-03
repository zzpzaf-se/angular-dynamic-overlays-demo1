import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { WarningComponent } from './warning/warning.component';
import { ImageContentComponent } from './image-content/image-content.component';
import { FormsModule } from '@angular/forms';
import { InputInteractionComponent } from './input-interaction/input-interaction.component';


@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    WarningComponent,
    ImageContentComponent,
    InputInteractionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
