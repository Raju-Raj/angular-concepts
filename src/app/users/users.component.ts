import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserservicesService } from './userservices.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  constructor(private us:UserservicesService){}

  ngOnInit(): void {
  }

  users = this.us.users
}
