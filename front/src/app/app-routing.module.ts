import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { SurveyComponent } from './components/survey/survey.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'main', component: ListProductsComponent },
  { path: 'add', component: AddEditProductComponent },
  { path: 'edit/:id', component: AddEditProductComponent },
  { path: 'survey', component: SurveyComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
