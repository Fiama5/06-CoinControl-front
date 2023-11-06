import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router'; 
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //Inicializamos la interfdz
  user: User = {
    id: 0,
    username: '',
    name: '',
    password: '',
    email: '',



  }

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.user).subscribe(
      (response: any) => {
        console.log('Inicio de sesión exitoso:', response.message);
        const userId = response.userId
        this.authService.setUserId(userId); //Obtener id del usuario una vez logueado
        this.router.navigate(['/add-expense'])  //redirigir una vez el usuario sea correcto
        console.log('Id usuario:', userId)

      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
        console.error('Mensaje de error:', error.error.message);
      }
    );
  }
}
