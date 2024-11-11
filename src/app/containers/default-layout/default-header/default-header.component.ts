import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit{

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  is_manager: boolean = false;
  is_employee: boolean = false;
  constructor(private classToggler: ClassToggleService,
    private authService: AuthServiceService,
    private router:Router
    ) {
    super();
  }
  ngOnInit(): void {
    this.is_manager = this.authService.isConducteur();
    this.is_employee = this.authService.isPassager();

  }
  logout() {
    this.authService.logout()
  }

}
