import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() values:any
  @Output() newchildtopar = new EventEmitter<string>()

  addValue(value:string){
    this.newchildtopar.emit(value)
  }

  message = "Hello World"
  
}
