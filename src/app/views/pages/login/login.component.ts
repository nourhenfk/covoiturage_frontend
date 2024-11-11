import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User} from 'src/app/models/user';
import {AuthServiceService} from 'src/app/services/auth-service.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = new User(0,'', '', '');

  constructor(private authService: AuthServiceService,
    private router: Router) { }

  ngOnInit(): void {
    //this.authService.isConducteur();
  }

  signIn(): void {
    let toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      },
    })
    this.authService.authenticate(this.user)
      .subscribe(
        res => {
          console.log('Signed in successfully');
          if( this.authService.isConducteur()){
            this.router.navigate(['/conducteur']).then(() => {
              toast.fire({
                icon: 'success',
                title: 'Bienvenue!',
                text: 'Vous êtes connecté en tant que Conducteur!',
              })
            });
          }
          else if (this.authService.isPassager())
          this.router.navigate(["/passager"]).then(() => {
            toast.fire({
              icon: 'success',
              title: 'Bienvenue!',
              text: 'Vous êtes connecté en tant que Passager!',
              })
              }
          );

        },
        err => {
          console.error('Error signing in:', err);
          toast.fire({
            icon: 'error',
            title: 'Erreur...',
            text: 'Invalide Credentials!',
          })
        }
      );
  }


}
