import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes }   from '@angular/router';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EqualValidator } from './equal-password.directive';
import { LoginComponent } from './login/login.component';
import { registerComponent } from './register/register.component';
import { TempComponent } from './temp/temp.component';
import { TempDetailComponent } from './temp-detail/temp-detail.component';
import { tempService } from './temp/temp.service';


const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: "full" },
  { path: 'register', component: registerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'temp', component: TempComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EqualValidator,
    registerComponent,
    LoginComponent,
    TempComponent,
    TempDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

