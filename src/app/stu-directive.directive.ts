import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { format } from 'util';

@Directive({
  selector: '[appStuDirective]'
})
export class StuDirectiveDirective {

  constructor(private el: ElementRef) { }


  @HostListener ('blur') onBlur(){

     let value : string = this.el.nativeElement.value;

     this.el.nativeElement.value = value.toLowerCase();
  
  }

}
