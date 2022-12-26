import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  success = 'success'
  error = 'error'
  underline = 'underline'
  bold = 'bold'
  multiClass = ['success','underline','bold']
}
