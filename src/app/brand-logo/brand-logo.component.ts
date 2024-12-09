import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brand-logo',
  standalone: true,
  imports: [],
  templateUrl: './brand-logo.component.html',
  styleUrl: './brand-logo.component.css'
})
export class BrandLogoComponent {
  @Input() logoSrc: string = '';
  @Input() altText: string = 'Brand Logo';

}
