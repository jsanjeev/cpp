import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {Client} from '../../models/Client';
import {ClientService} from '../../services/client.service';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = {
    name: '',
    email: '',
    mobile: '',
    balance: 0
  };

  disableBalanceOnadd:boolean;

  constructor(public flashMessagesService: FlashMessagesService,
              public router: Router,
              public clientService: ClientService,
              public settingServices: SettingsService) {
  }

  ngOnInit() {
    this.disableBalanceOnadd = this.settingServices.getSettings().disableBalanceOnAdd;
  }

  onSubmit({value, valid}: { value: Client, valid: boolean }) {
    if (this.disableBalanceOnadd) {
      value.balance = 0;
    }
    if (valid) {
      this.clientService.addNewClient(value);
      this.flashMessagesService.show('New Client Added', {cssClass: 'alert-success', timeout: 2000});
      this.router.navigate(['/']);
    } else {
      this.flashMessagesService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 2000});
      this.router.navigate(['add-client']);
    }
  }

}
