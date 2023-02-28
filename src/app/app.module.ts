import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XpTaskbarComponent } from './xp-taskbar/xp-taskbar.component';
import { XpIconComponent } from './xp-icon/xp-icon.component';
import { XpWindowComponent } from './xp-window/xp-window.component';

@NgModule({
  declarations: [
    AppComponent,
    XpTaskbarComponent,
    XpIconComponent,
    XpWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
