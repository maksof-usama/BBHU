import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone:true,
  imports: [NgClass, RouterLink, NgFor, NgIf],
})
export class SidebarComponent   {
  static instance: SidebarComponent;
  constructor(
    public common: CommonService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    SidebarComponent.instance = this;
  }
  isMobile: boolean = false;
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
