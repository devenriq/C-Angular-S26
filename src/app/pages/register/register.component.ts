import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FerreteriaService } from 'src/app/services/ferreteria.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formRegister!: FormGroup

  constructor( private ferreteriaService:FerreteriaService){
    this.formRegister= new FormGroup({
      producto:new FormControl(),
      costo: new FormControl(),
      foto: new FormControl(),
    })
  }

  onSubmit(){
    console.log(this.formRegister.value)
    const response = this.ferreteriaService.addProduct(this.formRegister.value)
    console.log(response)
  }
}
