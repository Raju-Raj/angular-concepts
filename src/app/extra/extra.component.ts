import { Component } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent {
  textColor = 'green'
  multiStyle = {
    color: 'red',
    textDecoration: 'underline',
    fontSize: '25px',
    fontFamily: 'Arial',
    fontWeight: 'bold'
  }
  hasError=false
}
