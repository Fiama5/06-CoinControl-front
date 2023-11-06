import { Component, OnInit } from '@angular/core';
import { Funds } from 'src/app/model/funds';
import { PredefinedFund } from 'src/app/model/predefined-fund';
import { AuthService } from 'src/app/service/auth.service';
import { FundsService } from 'src/app/service/funds.service';
import { PredefinedfundService } from 'src/app/service/predefinedfund.service';

@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.css']
})
export class AddFundComponent implements OnInit {



  constructor(
    private fundsService: FundsService,
    private predefinedfundService: PredefinedfundService,
    private authService: AuthService
  ) { }

  //Inicializacion de fondo
  funds: Funds = {
    id: 0,
    amount: 0,
    user: {
      id: 0,
      username: '',
      password: '',
      name: '',
      email: ''
    },
    predefinedFund: {
      id: 0,
      name: ''
    }
  }

  predefinedFundList: PredefinedFund[] = []; //Lista de fondos predefinidos
  selectPredefinedFund: number = 0;  //Fondo predefinido seleccionado

  ngOnInit(): void {

    //Metodo para obtener la lista de fondos predeterminados
    this.predefinedfundService.getPredefinedFund().subscribe(predefinedFundList => {
      this.predefinedFundList = predefinedFundList;
    });


    // Obtener el ID del usuario desde el servicio
    const userId = this.authService.getUserIdFromLocalStorage();
    // Verificar si el ID del usuario es distinto de null
    if (userId !== null) {
      // Si no es null, asignar el ID del usuario a Funds.user.id
      this.funds.user = {
        id: userId,
        username: '',
        password: '',
        name: '',
        email: ''
      };
    } else {
      
    }
  }


  submitForm(){
    const predefindfundId = this.selectPredefinedFund;   // Se obtiene el id del fondo predefinido obtenido en la lista desplegable
  //Se utiliza un console.log para ver los datos que se envian y corregir erroes si los hubiese
    console.log('Datos a enviar: ', this.funds)
    //Se manda el fondo al servicio para que se registre en la base de datos, se envia el fondo y el id del fondo predefinido seleccionado por el usuario
    this.fundsService.addFund(this.funds, predefindfundId).subscribe(()=>{
      this.funds= {
        id: 0,
        amount: 0,
        user: {
          id: this.funds.user ? this.funds.user.id || 0 : 0,
          username: '',
          password: '',
          name: '',
          email: ''
        },
        predefinedFund: {
          id: 0,
          name: ''
        }
      }
    })
  }
  

}




