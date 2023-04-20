import { Directive , ElementRef , HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomToolTip]'
})
export class CustomToolTipDirective {

  @Input()
  tooltip: string = 'bubble';

  constructor(private el : ElementRef, private renderer : Renderer2) { 

  }

  @HostListener('mouseover')
  processMouseOver() {
    window.alert("hover");
  }



}
