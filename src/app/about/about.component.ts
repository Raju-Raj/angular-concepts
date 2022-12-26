import { Component } from "@angular/core";

@Component({
  selector:'app-about',
  templateUrl:'./about.component.html',
  styleUrls:['./about.component.css'],
})


export class AboutComponent{
  send : string = "World"
  function(){
    this.send = "ramu"
    return this.send

  }
a:number=0
b:number=0
c:number=0
  add(){
    this.a=20
    this.b=30
    this.c=this.a+this.b
    return this.c

  }

}
