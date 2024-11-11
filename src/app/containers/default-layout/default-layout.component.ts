
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, Inject, Injectable } from '@angular/core';


import {navItemsUser} from './_userNav'

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

  public navItems = navItemsUser;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private authService: AuthServiceService) {
    if (this.authService.isConducteur()) {
      this.navItems = navItemsUser
    }else if(this.authService.isPassager()){
      this.navItems=navItemsUser
    }
    else {
      this.navItems = navItemsUser
    }
  }
}
