import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { CustomerSigninComponent } from './Components/customer-signin/customer-signin.component';
import { CustomerSignupComponent } from './Components/customer-signup/customer-signup.component';
import { ManagerSigninComponent } from './Components/manager-signin/manager-signin.component';
import { ManagerpageComponent } from './Components/managerpage/managerpage.component';
import { AddItemPageComponent } from './Components/add-item-page/add-item-page.component';
import { OrderPageComponent } from './Components/order-page/order-page.component';
import { CustomerPageComponent } from './Components/customer-page/customer-page.component';
import { ItemlistingComponent } from './Components/itemlisting/itemlisting.component';
import { EditItemPageComponent } from './Components/edit-item-page/edit-item-page.component';
import { EditpageComponent } from './Components/editpage/editpage.component';
import { DeleteItemComponent } from './Components/delete-item/delete-item.component';
import { DemoComponent } from './Components/demo/demo.component';
import { CoffeeanimationComponent } from './Components/coffeeanimation/coffeeanimation.component';



const routes: Routes = [
  { path: '',  component: HomepageComponent},
  { path: 'customer-signin',  component: CustomerSigninComponent},
  { path: 'customer-signup',  component: CustomerSignupComponent},
  { path: 'manager-signin',  component: ManagerSigninComponent},
  { path: 'managerpage',  component: ManagerpageComponent},
  { path: 'add-item-page',  component: AddItemPageComponent},
  { path: 'order-page',  component: OrderPageComponent},
  { path: 'customer-page',  component: CustomerPageComponent},
  { path: 'itemlisting',  component: ItemlistingComponent},
  { path: 'edit-item-page',  component: EditItemPageComponent},
  { path: 'editpage',  component: EditpageComponent},
  { path: 'delete-item',  component: DeleteItemComponent},  
  { path: 'demo',  component: DemoComponent},
  { path: 'coffeeanimation',  component: CoffeeanimationComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
