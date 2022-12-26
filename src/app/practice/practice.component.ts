import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  // Two Way Binding
  name = ""

  // if else condition directive
  age = 18

  btn = true;
  toggle(){
    this.btn = !this.btn
  }

  // switch Case
  color = 'green'

  // for loop
  names = ['Raju','Rajesh','Ramu','Manideep','Parnav','Harish','Santhosh']

}
