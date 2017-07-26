import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapValuesPipe'
})
export class MapValuesPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    let returnValue = [];
    
value.forEach((keys,values) => {
  returnValue.push(
    {
      key: keys,
      value:values
    }
  );
  console.log(returnValue);
});
    return returnValue;
  }
}
