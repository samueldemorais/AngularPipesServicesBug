import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(valor: any, args?: any): any {
    const telefone = valor.toString();
    
    if (telefone.length === 8) {
      return telefone.replace(/(\d{4})(\d{4})/, '$1-$2');
    } else if (telefone.length === 10 || telefone.length === 11) {
      return telefone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
    } else {
      return valor;
    }
  }

}
