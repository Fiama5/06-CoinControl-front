import { Component, OnInit } from '@angular/core';
import { Funds } from 'src/app/model/funds';
import { AuthService } from 'src/app/service/auth.service';
import { FundsService } from 'src/app/service/funds.service';
@Component({
  selector: 'app-all-funds',
  templateUrl: './all-funds.component.html',
  styleUrls: ['./all-funds.component.css']
})
export class AllFundsComponent implements OnInit {

  //Variable para poder mostrar los fondos del usuario logueado
  IdFunds: Funds[] = []

  constructor(
    private fundsService: FundsService,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    //Se llama a la funcion en el ngoninit para que se cargue automaticamente al inicio del componente
    this.getFundsById()
  }


  //Metodo para obtener todos los gastos del usuario logueado
  getFundsById() {

    //Se obtiene el userId del servicio para poder ver sus fondos disponibles
    const userId = this.authService.getUserIdFromLocalStorage();
    //Si user id no es nulo
    if (userId !== null) {
      //Se llama al servicio y se le pasa el userid
      this.fundsService.getFundsByUserId(userId).subscribe((data) => {
//Se carga los datos en IdFunds creada anteriormente
        this.IdFunds = data;
      })
    }
  }
}
