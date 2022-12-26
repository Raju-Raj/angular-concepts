import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  function(){
    alert("Hello World")
  }
  function2(data:any){
    alert(data)
  }
  data = "raju"
  function3(){
    alert(this.data)
  }
}

