import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class MyfilterPipe implements PipeTransform {

  transform(objs: any, term: any) {
    if (term === undefined) {
      return objs;
      }
      return objs.filter((obj)=> {
      return (obj.trainer.toLowerCase().includes(term.toLowerCase()));
      })
    }


}
