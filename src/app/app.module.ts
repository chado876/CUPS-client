import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {ShoppingCartModule} from 'ng-shopping-cart'; // <-- Import the module class
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { FeaturetteComponent } from './Components/featurette/featurette.component';
import { CustomerSigninComponent } from './Components/customer-signin/customer-signin.component';
import { CustomerSignupComponent } from './Components/customer-signup/customer-signup.component';
import { ManagerSigninComponent } from './Components/manager-signin/manager-signin.component';
import { ManagerpageComponent } from './Components/managerpage/managerpage.component';
import { ManagerSidebarComponent } from './Components/manager-sidebar/manager-sidebar.component';
import { ItemlistingComponent } from './Components/itemlisting/itemlisting.component';
import { AddItemPageComponent } from './Components/add-item-page/add-item-page.component';
import { OrderPageComponent } from './Components/order-page/order-page.component';
import { CustomerPageComponent } from './Components/customer-page/customer-page.component';
import { CustomerSidebarComponent } from './Components/customer-sidebar/customer-sidebar.component';
import { DemoComponent } from './Components/demo/demo.component';
import * as $ from 'jquery';
import { EditItemPageComponent } from './Components/edit-item-page/edit-item-page.component';
import { EditpageComponent } from './Components/editpage/editpage.component';
import { DeleteItemComponent } from './Components/delete-item/delete-item.component';
import { CoffeeanimationComponent } from './Components/coffeeanimation/coffeeanimation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    HomepageComponent,
    FeaturetteComponent,
    CustomerSigninComponent,
    CustomerSignupComponent,
    ManagerSigninComponent,
    ManagerpageComponent,
    ManagerSidebarComponent,
    ItemlistingComponent,
    AddItemPageComponent,
    OrderPageComponent,
    CustomerPageComponent,
    CustomerSidebarComponent,
    DemoComponent,
    EditItemPageComponent,
    EditpageComponent,
    DeleteItemComponent,
    CoffeeanimationComponent,
    
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ShoppingCartModule.forRoot({ // <-- Add the cart module to your root module
      //itemType: MyCartItemClass, // <-- Configuration is optional
      serviceType: 'localStorage',
      serviceOptions: {
        storageKey: 'NgShoppingCart',
        clearOnError: true
      }
    }),
    ShoppingCartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
