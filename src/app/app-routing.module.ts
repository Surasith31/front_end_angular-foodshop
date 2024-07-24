import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { AdminComponent } from './page/admin/admin.component';
import { CustomerComponent } from './page/customer/customer.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { OrderComponent } from './page/order/order.component';
import { StatusComponent } from './page/status/status.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'login',component: LoginComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'customer',component:CustomerComponent},
  {path: 'order',component:OrderComponent},
  {path: 'status',component:StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
