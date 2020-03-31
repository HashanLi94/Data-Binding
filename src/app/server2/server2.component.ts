import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {
  serverId = '002';
  serverStatus = 'offline';


  getServerId(){
    return this.serverId;
  }

  getServerStatus(){
    return this.serverStatus;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
