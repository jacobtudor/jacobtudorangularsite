import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuStatus = new BehaviorSubject<boolean>(false);
  menuStatus$ = this.menuStatus.asObservable()

  closeMenu() {
    this.menuStatus.next(false)
  }

  openMenu() {
    this.menuStatus.next(true)
  }

  toggleMenu() {
    const current = this.menuStatus.getValue();
    this.menuStatus.next(!current);
  }

  constructor() { }
}
