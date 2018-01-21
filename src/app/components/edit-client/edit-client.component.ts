import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Client} from '../../models/Client';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  id: string;
  client: Client = {
    name: '',
    email: '',
    mobile: '',
    balance: 0
  };
  disableBalanceOnEdit = false;

  constructor(public clientService: ClientService,
              public flashMessageService: FlashMessagesService,
              public router: Router,
              public route: ActivatedRoute,
              public settingServices: SettingsService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
    });

    this.disableBalanceOnEdit = this.settingServices.getSettings().disableBalanceOnEdit;
  }

  onSubmit({value, valid}: { value: Client, valid: boolean }) {
    if (valid) {
      this.clientService.updateClient(this.id, value);
      this.flashMessageService.show('Client Updated', {cssClass: 'alert-success', timeout: 2000});
      this.router.navigate(['/client/' + this.id]);
    } else {
      this.flashMessageService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 2000});
      this.router.navigate(['edit-client/' + this.id]);
    }
  }

}
