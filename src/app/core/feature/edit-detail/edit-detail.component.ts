import { Component, OnInit, ViewChild  } from '@angular/core';
import { Item } from '../../interfaces/item';

import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, FormControl, Validators, NgForm   } from '@angular/forms';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {

  idItem: number;

  dataItems: Array<Item> = [];
  registerItemForm: FormGroup;

  @ViewChild('formDirective') private formDirective: NgForm;
  constructor(private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
    this.initForm();
    let tempDataDetail = localStorage.getItem('details')

    this.dataItems = JSON.parse(tempDataDetail);


    this.route.queryParams
      .subscribe((params) => {
        
        this.idItem = params['id'];
      }
    );

    this.dataItems.forEach(item=>{
      
      if(item.id == this.idItem){    
        console.log('DATAITEMMSSSSSmmm', item._about);   
        this.registerItemForm.controls['aboutForm'].setValue(item._about);
        this.registerItemForm.controls['accessURLForm'].setValue(item.accessURL);
        this.registerItemForm.controls['titleForm'].setValue(item.title);

      } 
    })

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

  onSubmitDetail(){
    // Verificamos si el formulario es válido
    console.log(this.registerItemForm)
    if(this.registerItemForm.valid){
      // Inicializamos una variable temporal con la información del formulario
      let tempData: Item = {
        id: this.idItem,
        _about: this.registerItemForm.controls['aboutForm'].value,
        accessURL: this.registerItemForm.controls['accessURLForm'].value,
        title: this.registerItemForm.controls['titleForm'].value,

      };

      this.dataItems.forEach((agent, index)=>{

        if(agent.id == this.idItem){
        this.dataItems[index] = tempData;
          console.log('data guardada:',agent)
        } 
      })
      console.log('data guardada:', this.dataItems)
      // Pusheamos la información en el arreglo declarado previamente
      localStorage.removeItem('details');
      localStorage.setItem('details', JSON.stringify(this.dataItems));
     

      //Finalemte redirigimos al listado de items
      this.router.navigate(['/listItems'])
      
    }else{
      console.log("no valido");
    }
  } 

}
