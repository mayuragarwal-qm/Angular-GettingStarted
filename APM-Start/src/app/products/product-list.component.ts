import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService) { }

  pageTitle: string = 'Product List';

  imageBehaviour = {
    height: 30,
    show: false
  }

  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];

  private _listFilter: string = "";
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.filterProducts(value);
  }

  sub!: Subscription;
  errorMessage: any;

  filterProducts(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(product =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage() {
    this.imageBehaviour.show = !this.imageBehaviour.show;
  }

  ngOnInit(): void {
    this.listFilter = "";
    this.sub = this.productService.getProducts()
      .subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingChanged(rating: number, productId: number): void {
    console.log(`Received rating ${rating} for product ${productId}`);
    this.products.every(p => {
      if (p.productId == productId) {
        p.starRating = rating;
        return false; // break from loop
      }
      return true;
    });
  }
}