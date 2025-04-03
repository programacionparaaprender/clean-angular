import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFloat]',
  standalone: true
})
export class FloatValidatorDirective {

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  private regex: RegExp = /^-?\d*\.?\d*$/;
  
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    if (!this.regex.test(value)) {
      // Remove invalid characters from input
      this.renderer.setProperty(this.el.nativeElement, 'value', this.removeInvalidCharacters(value));
    }
  }

  private removeInvalidCharacters(value: string): string {
    return value.split('').filter(char => this.regex.test(char)).join('');
  }
}
