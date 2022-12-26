import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  // show(name:any,password:any,group:any){
  //   console.log(name)
  //   console.log(password)
  //   console.log(group)
  // }

  show(name:any,password:any){
    console.log(name)
    console.log(password)
  }

  submit(form:any){
    console.log(form)
  }

  shown(form:any){
    form.setValue({
      'username':"john",
      'password':'12345678'
    })
    console.log(form.value)
    // form.control.patchValue({
    //   'username':"john"
    // })
    // console.log(form.value)
  }

}
