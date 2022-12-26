import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(person: any, wish:any): unknown {
    if(person.gender==='f'){
      return `Hi miss ${person.name} ${wish}`
    }else{
      return `Hi mr ${person.name} ${wish}`
    }

  }

}
