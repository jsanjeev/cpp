import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../services/settings.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Settings} from '../../models/Settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: Settings;

  constructor(public settingsService: SettingsService,
              public flasMessagesServise: FlashMessagesService,
              public router: Router) {
  }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }

  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    this.flasMessagesServise.show('Settings Saved', {cssClass: 'alert-success', timeout: 2000});
    this.router.navigate(['/settings']);
  }

}
