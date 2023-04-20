import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomToolTipComponent } from './custom-tool-tip/custom-tool-tip.component';
import { CustomToolTipDirective } from './custom-tool-tip.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomToolTipComponent,
    CustomToolTipDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
