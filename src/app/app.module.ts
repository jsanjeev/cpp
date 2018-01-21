// Angular Inbuilt Modules Imports
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {FlashMessagesModule} from 'angular2-flash-messages';

// Angular Fire2 Imports
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database-deprecated';
import {AngularFireAuth} from 'angularfire2/auth';


// Custom Components Imports
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ClientsComponent} from './components/clients/clients.component';
import {ClientDetailsComponent} from './components/client-details/client-details.component';
import {AddClientComponent} from './components/add-client/add-client.component';
import {EditClientComponent} from './components/edit-client/edit-client.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {SettingsComponent} from './components/settings/settings.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

// Router Component Imports
import {AppRoutingModule} from './routes/app.routing.module';

// Angular Material Components Imports
import {AppMaterialModule} from './material/app.material.module';

// Services Imports
import {ClientService} from './services/client.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {RegisterGuard} from './guards/register.guard';
import {SettingsService} from './services/settings.service';


// for deployment use this command----> ng build --prod --base-href='yourURL'
// using github--->  npm install -g angular-cli-ghpages
// run ----->>     angular-cli-ghpages         ------------ to publish

export const fireBaseConfig = {
  apiKey: 'AIzaSyAHwJR8oIngwRRt5Ad6mUVjmUNYpQq8zrU',
  authDomain: 'clientpanel-cb1e8.firebaseapp.com',
  databaseURL: 'https://clientpanel-cb1e8.firebaseio.com',
  storageBucket: 'clientpanel-cb1e8.appspot.com',
  messagingSenderId: '111859127220'
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(fireBaseConfig),
    FlashMessagesModule.forRoot()
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    AuthService,
    AuthGuard,
    SettingsService,
    RegisterGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
