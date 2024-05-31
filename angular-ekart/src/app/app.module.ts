import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './Header/top-menu/top-menu.component';
import { MainMenuComponent } from './Header/main-menu/main-menu.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailsComponent } from './container/product-details/product-details.component';
import { FeaturedProductsComponent } from './container/featured-products/featured-products.component';
import { TestComponent } from './test/test.component';
import { SetBackground } from './container/CustomDirective/SetBackground.directive';
import { HighlightDirective } from './container/CustomDirective/highlight.directive';
import { AppHoverDirective } from './container/CustomDirective/app-hover.directive';
@NgModule({
  declarations: [
    AppComponent, // pipes, components, directives belongs to this angular modules
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailsComponent,
    FeaturedProductsComponent,
    TestComponent,
    SetBackground,
    HighlightDirective,
    AppHoverDirective,
  ],
  imports: [
    BrowserModule, // External modules require for angular application
    FormsModule,
  ],
  providers: [], // Register all our services in our angular application
  bootstrap: [AppComponent], // Specify the component that should be load when AppModule is loaded.
})
export class AppModule {}
