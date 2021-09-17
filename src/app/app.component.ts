import { Component } from '@angular/core';
import { DetailsService } from 'src/app/core/services/details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'soaint-app';

  constructor(private detailService: DetailsService){

  }
  ngOnInit(): void {
    this.initData()
  }

  initData(){
    
    this.detailService.getItems().subscribe(details=>{
      
      let count = 0;
      details['result'].items.forEach(agent=> {
        agent.id = count;
        count++;
      });

      localStorage.setItem('details', JSON.stringify(details['result'].items) );
    })
  }
}
