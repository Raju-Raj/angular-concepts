import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  
  list = [
    {name:'Pranav',age:25},{name:'Manideep',age:25},
  ]

  formParent(data:any){
    console.log(data)
  }


  addValues(newValue:string){
    this.values.push(newValue)
  }
  
  values = ['raju','manideep','pranav']

  
 
}
