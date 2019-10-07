import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HttpClientModule} from '@angular/common/http';
import {AppCustomPrimeNgModule} from './modules/app-custom-primeng.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VerifyComponent, DialogOverviewExampleDialog} from './components/verify/verify.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {UtilityService} from './services';


@NgModule({
  declarations: [
    AppComponent,
    VerifyComponent,
    NavbarComponent,
    FooterComponent,
    DialogOverviewExampleDialog
  ],
  entryComponents: [DialogOverviewExampleDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCustomPrimeNgModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule
  ],
  providers: [UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
