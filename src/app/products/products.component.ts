// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/products.model';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  inpdata: Product[] = [];
  originalProducts: Array<{
    productCategory: {
      productCategoryId: string;
      productCategoryName: string;
      productCategoryImage: string;
      wholeSale: boolean;
      retail: boolean;
      orderIndex: number;
    };
    subCategories: null;
  }> = [];
  products: Array<{
    productCategory: {
      productCategoryId: string;
      productCategoryName: string;
      productCategoryImage: string;
      wholeSale: boolean;
      retail: boolean;
      orderIndex: number;
    };
    subCategories: null;
  }> = [];
  searchTerm: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (data: Product) => {
        this.originalProducts = data.response;
        this.products = [...this.originalProducts];
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  filterProducts() {
    if (this.searchTerm === '') {
      this.products = [...this.originalProducts];
    } else {
      this.products = this.originalProducts.filter((product: any) =>
        product.productCategory.productCategoryName
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
