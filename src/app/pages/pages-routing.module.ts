import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { SearchMedicineComponent } from './search-medicine/search-medicine.component';

const routes: Routes = [
  {
    path: '',
    component:PagesComponent,
    children:[
      {
        path:'',
        component:SearchMedicineComponent
        
      },
      {
        path:'search-medicine',
        component:HomeComponent,
    
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
