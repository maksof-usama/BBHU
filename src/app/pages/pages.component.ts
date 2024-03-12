import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  standalone:true,
  imports:[RouterOutlet,LayoutComponent]
})
export class PagesComponent implements OnInit { 
  constructor() {}

  ngOnInit(): void {
    
  }
}
