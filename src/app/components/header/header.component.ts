import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:true,
  imports: [NgClass, RouterLink, NgFor, NgIf],
})
export class HeaderComponent {
  menus=[
    {
      lable:"About",
      href:'/about',
    },
    {
      lable:'Content',
      href:"/content"
    }
  ]

}
