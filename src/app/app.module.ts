import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';
import { UserClientInterfaceComponent } from './components/user-client-interface/user-client-interface.component';
import { FormsModule } from '@angular/forms';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { LoginUsersComponent } from './login-users/login-users.component';


@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    ListOfUsersComponent,
    UserClientInterfaceComponent,
    RegisterUsersComponent,
    LoginUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
