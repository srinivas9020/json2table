import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  public keys: Array<String>;
  @Input() jsonArray:Array<any>;
  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.keys = this.utilityService.getKeysFromArray(this.jsonArray);
  }

  isArray(item) {
    return this.utilityService.isArray(item);
  }

  isObject(item) {
    return this.utilityService.isObject(item);
  }

  isString(item) {
    return this.utilityService.isString(item);
  }

}
