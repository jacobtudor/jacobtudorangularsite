import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { DnaHelixComponent } from "../../components/dna-helix/dna-helix.component";

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, DnaHelixComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  menuOpen = false;

  constructor(private menuservice: MenuService){}

  ngOnInit() {
    this.menuservice.menuStatus$.subscribe(state => { 
      this.menuOpen = state
    })
  }

  OnToggleMenu(){
    this.menuservice.toggleMenu()
  }
  OnCloseMenu() {
    this.menuservice.closeMenu();
  }
  OnOpenMenu() {
    this.menuservice.openMenu()
  }
}
