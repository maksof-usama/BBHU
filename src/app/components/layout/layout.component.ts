import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgFor, NgIf ,CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports:[NgIf,NgFor, HeaderComponent]

})
export class LayoutComponent {

}
