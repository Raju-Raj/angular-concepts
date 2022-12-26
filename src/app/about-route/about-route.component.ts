import { Component } from '@angular/core';
import { ServicesdataService } from '../servicesdata.service';

@Component({
  selector: 'app-about-route',
  templateUrl: './about-route.component.html',
  styleUrls: ['./about-route.component.css']
})
export class AboutRouteComponent {
  constructor(public sd:ServicesdataService){}

  mobiles = this.sd.mobiles

  students = [
    'raju',
    'ramu',
    'rajesh'
  ]

  employees = [
    'bharath',
    'manideep',
    'pranav'
  ]
}
