import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Product } from '../shared/product.interface';
import { config, take } from 'rxjs';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit{
  constructor() {}
  ngOnInit():void{}
  onSearch(value:string){
    if (value && value.length>3) {
      
    }
  }

}