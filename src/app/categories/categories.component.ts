import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categories = [
    { name: 'Category Name 1', products: 100, image: 'src/assets/images/category1.jpg' },
    { name: 'Category Name 2', products: 100, image: 'assets/images/category2.jpg' },
    { name: 'Category Name 3', products: 100, image: 'assets/images/category3.jpg' },
    { name: 'Category Name 4', products: 100, image: 'assets/images/category4.jpg' },
  ];
}


 