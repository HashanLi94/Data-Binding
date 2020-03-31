import {Component} from '@angular/core';

@Component({
  selector : 'app-servers',
  templateUrl : './servers.component.html'
})

export class ServersComponent {
  newServerAdd = false;
  serverCreationStatus = 'New server hasnt created yet';
  serverName = '';
  serverId = '';
  serverSection = '';

  constructor() {
    setTimeout(() => {
      this.newServerAdd = true;
    }, 2000
    );
  }

  onServerCreation(){
    return this.serverCreationStatus = 'New server has created succesfully';
  }

  onUpdateServerName(event: Event){
    return  this.serverName = (event.target as HTMLInputElement).value;
  }

  onServerIdCreation($event: Event){
    return this.serverId = (event.target as HTMLInputElement).value;

  }

  onServerUpdateServerSection(event : Event){
    return this.serverSection = (event.target as HTMLInputElement).value;
  }


}
