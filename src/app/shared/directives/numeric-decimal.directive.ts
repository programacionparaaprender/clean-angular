import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNumericDecimal]',
  standalone: true
})
export class NumericDecimalDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    const charCode = (event.charCode) ? event.charCode : event.keyCode;

    // Permitir solo números y un punto decimal
    if ((charCode < 48 || charCode > 57) && charCode !== 46) {
      event.preventDefault();
    }
  }

  @HostListener('blur', ['$event']) onBlur() {
    let value = this.el.nativeElement.value;

    // Convertir el valor a número y formatearlo a dos decimales
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      this.el.nativeElement.value = numericValue.toFixed(2);
    } else {
      this.el.nativeElement.value = '';
    }
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    const pastedData = event.clipboardData?.getData('text');
    if (pastedData && !/^\d*\.?\d*$/.test(pastedData)) {
      event.preventDefault();
    }
  }
}
