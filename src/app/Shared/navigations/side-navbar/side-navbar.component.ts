import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SideNavbarService } from '../../../Services/side-navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent implements OnInit, OnDestroy {

  private readonly _destroy$ = new Subject<void>();
  navItem$ = this._sideNavbarService.loadNavItem();

  constructor(
    private readonly _sideNavbarService: SideNavbarService,
    private readonly _router: Router
  ){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  navigateItem(navItem: string): void{
    var route = '';
    switch(navItem){
      case 'Dashboard':
        route = 'dashboard';
        break;
      
      case 'User':
        route = 'user-management';
        break;
    }
  this._router.navigate([route]);
  }
}
