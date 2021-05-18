import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/components/star/star.component';

import { ConvertToSpacePipe } from './shared/pipes/convert-to-space.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, 
    ProductListComponent,
    StarComponent,
    ConvertToSpacePipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
