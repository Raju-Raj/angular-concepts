import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'application';
// custom pipe
  // person = {
  //   'name':'raju',
  //   'gender':'m'
  // }
  // wish = "Good Morning"

  @ViewChild("div") divd:any

  fun(){
    console.log(this.divd)
    this.divd.nativeElement.style.color = 'blue'
  }
}
