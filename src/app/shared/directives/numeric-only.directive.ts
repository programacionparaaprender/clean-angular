import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNumericOnly]',
  standalone: true
})
export class NumericOnlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    const charCode = (event.charCode) ? event.charCode : event.keyCode;
    // Permitir solo números (0-9)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    const pastedData = event.clipboardData?.getData('text');
    if (pastedData && !/^\d+$/.test(pastedData)) {
      event.preventDefault();
    }
  }
}
