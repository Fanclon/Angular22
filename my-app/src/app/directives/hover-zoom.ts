import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverZoom]',
})
export class HoverZoom {
  @Input() appHoverZoom = 1.1;
  @Input() zoomColor = '#fff3b0';

  @HostBinding('style.transform') transform = 'scale(1)';
  @HostBinding('style.backgroundColor') backgroundColor = '';
  @HostBinding('style.transition') transition = 'all 0.2s ease';
  @HostBinding('style.transform-origin') transformOrigin = 'left center';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.transform = `scale(${this.appHoverZoom})`;
    this.backgroundColor = this.zoomColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.transform = 'scale(1)';
    this.backgroundColor = '';
  }
}
