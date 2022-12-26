import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name:string = ''
  getValue(value:any){
    this.name = value
    console.warn(value)
  }
}
