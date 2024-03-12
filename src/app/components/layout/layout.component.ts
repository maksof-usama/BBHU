import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

import { NgFor, NgIf ,CommonModule } from '@angular/common';
import { SidebarComponent} from '../siderbar/sidebar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports:[NgIf,NgFor, HeaderComponent,SidebarComponent]

})
export class LayoutComponent {

}
