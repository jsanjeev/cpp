import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import 'rxjs/add/operator/map';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private flashMessageService: FlashMessagesService,
              public settingServices: SettingsService) {
  }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }
      else {
        this.isLoggedIn = false;
      }
    });

    this.showRegister = this.settingServices.getSettings().allowRegistration;
  }

  onLogout() {
    this.authService.logout();
    this.flashMessageService.show('You are logged out', {cssClass: 'alert-succes', timeout: 2000});
    this.router.navigate(['/login']);
  }

}
