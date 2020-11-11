import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { prodotti } from './prodotti.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  prodotti: prodotti[];
  ob: Observable<prodotti[]>;
  caricamento: boolean;
  constructor(public http: HttpClient) {
  }
  gino():void{
    this.caricamento=true;
    this.ob=this.http.get<prodotti[]>("https://3000-b35f1499-3c77-4146-8acb-56abc0c6e713.ws-eu01.gitpod.io/api/products");
    this.ob.subscribe(this.getdata);
  }
  getdata(p: prodotti[]):void{
    this.prodotti=p;
    this.caricamento=false;
  }

}

