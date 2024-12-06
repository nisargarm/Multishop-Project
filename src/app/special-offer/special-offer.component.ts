import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-special-offer',
  standalone: true,
  imports: [],
  templateUrl: './special-offer.component.html',
  styleUrl: './special-offer.component.css'
})
export class SpecialOfferComponent {
  @Input() imageSrc!: string;  
  @Input() discount!: string;  
  @Input() title!: string;   

}
