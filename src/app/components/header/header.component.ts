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
  searchIsVisible: boolean = false;
  isMobile: boolean = false;
  isToggle: boolean = false;
  slideState = false;
   isDivVisible = false;
   selectedIndex = -1;

  constructor(public common: CommonService) {
    
  }
  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.checkScreenWidth();
    });
  }
  checkScreenWidth() {
    if (!window) return;
    this.isMobile = window.innerWidth <= 1270;
  }

  toggleSearchBar() {
    this.searchIsVisible = !this.searchIsVisible;
  }

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
