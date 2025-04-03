import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDecimalFormat]',
  standalone: true
})
export class DecimalFormatDirective {

  private readonly decimalPlaces = 2;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    this.formatValue();
  }

  @HostListener('focus') onFocus() {
    // Optionally remove formatting when the input is focused
    const value = this.el.nativeElement.value;
    if (value) {
      this.el.nativeElement.value = value.replace(/[^0-9.]/g, '');
    }
  }

  private formatValue() {
    const value = this.el.nativeElement.value;
    if (value) {
      const numValue = parseFloat(value.replace(/[^0-9.]/g, ''));
      if (!isNaN(numValue)) {
        this.el.nativeElement.value = numValue.toFixed(this.decimalPlaces);
      } else {
        this.el.nativeElement.value = '';
      }
    }
  }
}
