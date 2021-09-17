import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  dataTest: any;
  constructor(private http: HttpClient) { }

  getItems(): Observable<any>{
    return this.http.get("https://datos.gob.es/apidata/catalog/distribution");
  }
}
