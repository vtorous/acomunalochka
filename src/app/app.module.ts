import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { HistoryComponent } from './history/history.component';
import { UsersettingsComponent } from './usersettings/usersettings.component';


@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    HistoryComponent,
    UsersettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
