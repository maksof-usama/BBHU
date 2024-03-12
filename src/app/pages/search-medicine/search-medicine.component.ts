import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-medicine',
  templateUrl: './search-medicine.component.html',
  styleUrls: ['./search-medicine.component.scss'],
  imports:[NgFor],
  standalone:true
})
export class SearchMedicineComponent {
   buttonactive:boolean = false;

}
