import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { BannerComponent } from "./banner/banner.component";
import { FooterComponent } from "./footer/footer.component";
 import { CategoriesComponent } from "./categories/categories.component";
import { FeaturesComponent } from "./features/features.component";
import { SpecialOfferComponent } from "./special-offer/special-offer.component";
import { ProductComponent } from "./product/product.component";
import { BrandLogoComponent } from "./brand-logo/brand-logo.component";
import { RecentProductsComponent } from "./recent-products/recent-products.component";
  
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BannerComponent, FooterComponent, CategoriesComponent, FeaturesComponent, SpecialOfferComponent, ProductComponent, BrandLogoComponent, RecentProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multishop';
  
  
}
