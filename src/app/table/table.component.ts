import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from '../utility.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() inputJson;
  constructor(private utilityService:UtilityService) { }

  ngOnInit() {
    
  }

  isArray(item) {
    return this.utilityService.isArray(item);
  }

  isObject(item) {
    return this.utilityService.isObject(item);
  }
}
