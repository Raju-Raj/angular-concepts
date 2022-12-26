import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  number1 = 0
  number2 = 0
  sum = 0

  calc(num1:any,num2:any){
    this.sum = parseFloat(num1)+parseFloat(num2)
  }

}
