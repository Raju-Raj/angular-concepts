import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-http-call',
  templateUrl: './http-call.component.html',
  styleUrls: ['./http-call.component.css']
})
export class HttpCallComponent {
  constructor(private http:HttpClient){}

  data:any;

  getData(){
    this.http.get('https://fakestoreapi.com/products?limit=5').subscribe(
      (value)=>{
        this.data = value
      }
    )
  }

  nobs = new Observable((intimate)=>{
    intimate.next("first");
    setTimeout(()=>{intimate.next("second")},1000);
    intimate.next("third");
    setTimeout(()=>{
      intimate.error("this is test error")
    },1000)
    setTimeout(()=>{intimate.complete()},1000)

  })

  refere:any;

subscribe(){
  this.refere=this.nobs.subscribe(
    data=>{console.log(data)},
    error=>{console.log(error)},
    ()=>console.log("complete")
  )
}

unsubscribe(){
this.refere.unsubscribe()
}

}
