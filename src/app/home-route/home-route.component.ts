import { Component } from '@angular/core';
import { ServicesdataService } from '../servicesdata.service';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.css']
})
export class HomeRouteComponent {
  constructor(public sd:ServicesdataService){}

  mobiles = this.sd.mobiles

  addmob(){
    this.sd.mobiles.push("mahesh")
  }
}
