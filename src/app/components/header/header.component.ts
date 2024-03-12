import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:true,
  imports: [NgClass, RouterLink, NgFor, NgIf],
})
export class HeaderComponent {

  constructor(
    public common: CommonService,
    
  ) {
    
  }

  searchIsVisible: boolean = false;
  isMobile: boolean = false;
  isToggle: boolean = false;
  hideInTab() {
    this.searchIsVisible = !this.searchIsVisible;
  }
  toggleSidebar(){
    console.log("work")
    this.isToggle = !this.isToggle;
  }
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
