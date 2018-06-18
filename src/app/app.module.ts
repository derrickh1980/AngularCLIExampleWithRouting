import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { NumberComponent } from './number/number.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      AppRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
