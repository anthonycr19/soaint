import { Component, OnInit } from '@angular/core';

import { Item } from 'src/app/core/interfaces/item';

import { Router} from '@angular/router';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css'], 
  styles: [`
        :host ::ng-deep .p-cell-editing {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
    `]
})
export class ListDetailsComponent implements OnInit {

  clonedItems: Item[];

  selectedItems: Item[];

  details: Item[];

  cols: any[];

  constructor(private router: Router) { }

  cosas: any[];

  selectedProduct2: Item;

  ngOnInit(): void {
    this.initData()
  }

  initData(){
    this.details = JSON.parse(localStorage.getItem('details'));
  }

  onRowSelect(event) {  
    this.router.navigate(['/editItem'], { queryParams: { id: event.data.id } });
  }
}
