import {
  Directive,
  ElementRef,
  HostBinding,
  Renderer2,
  OnInit,
  HostListener,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appThreshColor]',
})
export class ThreshColorDirective implements OnInit {
  @HostBinding('style.backgroundColor') bgColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log(this.elRef.nativeElement.value);
    this.bgColor = this.elRef.nativeElement.value > 1.1 ? 'green' : 'red';
  }
}
