import { Component, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.css',
})
export class SvgIconComponent {
  @HostBinding('style.-webkit-mask-image')
  private _path!: string;

  @HostListener('mouseenter', ['$event.target']) onMouseEnter(
    target: HTMLElement
  ) {
    target.style.backgroundImage = 'linear-gradient(to left, #ff9e9e, #fadc93)';
  }
  @HostListener('mouseleave', ['$event.target']) onMouseLeave(
    target: HTMLElement
  ) {
    target.style.backgroundImage = '';
  }

  @Input() color!: string;

  @Input()
  public set path(filePath: string) {
    this._path = `url("${filePath}")`;
  }
}
