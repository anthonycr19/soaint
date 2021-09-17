import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { Router, ActivatedRoute} from '@angular/router';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-create-detail',
  templateUrl: './create-detail.component.html',
  styleUrls: ['./create-detail.component.css']
})
export class CreateDetailComponent implements OnInit {

  registerItemForm: FormGroup;
  itemAgentForm: FormGroup;

  dataItems: Array<Item> = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {

    this.registerItemForm = new FormGroup({
      aboutForm: new FormControl('', [
        Validators.required
      ]),
      accessURLForm: new FormControl('', [
        Validators.required
      ]),
      titleForm: new FormControl('', [
        Validators.required
      ])
    });
  }

  onSubmitItem(){
    // Verificamos si el formulario es válido
    if(this.registerItemForm.valid){
      // Obtenemos la data de local storage
      let tempDataAgent = localStorage.getItem('details')

      this.dataItems = JSON.parse(tempDataAgent)

      // Inicializamos una variable temporal con la información del formulario
      let tempData: Item = {
        id: this.dataItems.length + 1,
        _about: this.registerItemForm.controls['aboutForm'].value,
        accessURL: this.registerItemForm.controls['accessURLForm'].value,
        title: this.registerItemForm.controls['titleForm'].value,
      };

      // Pusheamos la información en el arreglo declarado previamente
      this.dataItems.push(tempData);
      localStorage.setItem('details', JSON.stringify(this.dataItems));
        
      // Finalmente cuando guardamos el item redirigimos a lista de formularios
      this.router.navigate(['/listItems'])
      
    }else{
      console.log("no valido");
    }
  }

}
