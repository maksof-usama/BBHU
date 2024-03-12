import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  browserIpAddress!: string;
 
  constructor() {}
  toggleSidebar: BehaviorSubject<boolean> = new BehaviorSubject(false);
  toggle(): void {
    this.toggleSidebar.next(!this.toggleSidebar.value);
  }
}
