import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-object-component',
  templateUrl: './object-component.component.html',
  styleUrls: ['./object-component.component.css']
})
export class ObjectComponentComponent implements OnInit {
  public keys:Array<any>;
  @Input() jsonObject: Object;
  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.keys = this.utilityService.getKeysFromObject(this.jsonObject);
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

  getColSpanCount(item){
    if(this.isObject(item) || this.isArray(item)){
      return 2;
    }
    return 0;
  }
}
