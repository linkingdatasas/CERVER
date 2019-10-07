import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VerifyComponent} from './components/verify/verify.component';



const routes: Routes = [
  // {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'verify', component: VerifyComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
