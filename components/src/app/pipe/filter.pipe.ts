import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], phrase: string): unknown {
    if (!Array.isArray(value) || !phrase) {
      return value;
    }

    phrase = phrase.toLowerCase();
    return value.filter( item => {
      return JSON.stringify(item)
        .replace(/\"\{\"[^\"]*\"\:\"+|\"+\}\"/g, '')
        .toLowerCase()
        .includes( phrase );
    });
  }

}
