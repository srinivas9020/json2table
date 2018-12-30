import { Component, OnInit } from '@angular/core';
import { sampleJson } from '../assets/jsonData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dynamic-table';
  public json:any;
  constructor(){

  }

  ngOnInit(){
    this.json = sampleJson;
  }
}
