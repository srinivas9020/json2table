import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public inputText:any;
  public inputJson:any;
  public jsonValid:boolean = true;

  constructor(private utilityService:UtilityService) { }

  ngOnInit() {
    
  }

  renderTable(){
    try{
      this.inputJson = JSON.parse(this.inputText);
      this.jsonValid = true;
    }
    catch(err){
      this.jsonValid = false;
      alert(err.message);
    }
  }

  isArray(item) {
    return this.utilityService.isArray(item);
  }

  isObject(item) {
    return this.utilityService.isObject(item);
  }
}
