import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {HomeComponent} from './components/home/home.component';
import {ProductAddComponent} from './components/product-add/product-add.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';
import {StructuresComponent} from './components/structures/structures.component';
import {ServiceAnalytiqueComponent} from './components/service-analytique/service-analytique.component';
import {ServAnalEditComponent} from './components/serv-anal-edit/serv-anal-edit.component';

const routes: Routes = [
  { path: "products", component:ProductsComponent},
  { path: "newProduct", component:ProductAddComponent},
  { path: "editProduct/:id", component:ProductEditComponent},
  { path: "", component:HomeComponent},
  {path: "structures", component:StructuresComponent},
  {path: "servicesAnalytique", component:ServiceAnalytiqueComponent},
  {path: "editServiceAnalytique/:anal_id", component:ServAnalEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
