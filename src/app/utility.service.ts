import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
  isArray(item) {
    return Array.isArray(item);
  }

  isObject(item) {
    return !Array.isArray(item) && typeof (item) === 'object';
  }

  isString(item) {
    return typeof (item) === 'string' || typeof(item) === 'number';
  }

  getKeysFromArray(sourceArray) {
    let keys = [];
    _.each(sourceArray, (value, key) => {
      if (this.isObject(value) && !this.isArray(value)) {
        _.each(value, (innerValue, innerKey) => {
          if (keys.indexOf(innerKey) === -1) {
            keys.push(innerKey);
          }
        });
      }
      else if (typeof (value) === 'string') {
        if (keys.indexOf(key) === -1) {
          keys.push(key);
        }
      }
      else if (this.isArray(value)) {
        if (keys.indexOf(key) === -1) {
          keys.push(key);
        }
      }
    });

    return keys;
  }

  getKeysFromObject(item){
    return Object.keys(item);
  }


}
