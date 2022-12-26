import { Component } from '@angular/core';

@Component({
  selector: 'app-pipesprac',
  templateUrl: './pipesprac.component.html',
  styleUrls: ['./pipesprac.component.css']
})
export class PipespracComponent {
  name = 'angular pipes'
  number = 25000

  object = {
    "name":"raju",
    "age":25,
    "salary":10000
  }

  dob = new Date()
  date = this.dob.getDate()

  percent = 12

  string = "rajubojja"
}
