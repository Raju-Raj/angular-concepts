import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserservicesService } from '../userservices.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  constructor(private route:ActivatedRoute, private us:UserservicesService){}
  cuser:any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>{
      let userId:any = param.get('id');
      this.cuser = this.us.users.find(item => item.id==userId)
    })
  }
}
