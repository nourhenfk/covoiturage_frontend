import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user: User = new User(0,'', '', '');

  constructor(private authService: AuthServiceService,
    private router: Router) { }

  ngOnInit(): void {

  }

  signUp(): void {
    this.authService.register(this.user)
      .subscribe(
        res => {
          console.log('Signed up successfully');
          if( this.authService.isConducteur()){
            this.router.navigate(['/home']);
          }else if (this.authService.isPassager())
          this.router.navigate(['/home']);
          // Navigate to the home page or redirect to the previous page
        },
        err => {
          console.error('Error signing up:', err);
          // Display an error message to the user
        }
      );
  }

}
