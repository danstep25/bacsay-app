import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NAV_ITEM } from '../Shared/constants/nav-item.constants';

@Injectable({
  providedIn: 'root'
})
export class SideNavbarService {

  constructor() { }

  loadNavItem(): Observable<string[]>{
    return of(NAV_ITEM);
  }
}
