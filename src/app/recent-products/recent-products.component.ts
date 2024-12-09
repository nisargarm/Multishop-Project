import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-products',
  standalone: true,
  imports: [],
  templateUrl: './recent-products.component.html',
  styleUrl: './recent-products.component.css'
})
export class RecentProductsComponent {
  name!: string;
  image!: string;
  price!: number;
  rating!: number;

}
