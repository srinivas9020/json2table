import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ArrayComponent } from './array/array.component';
import { ObjectComponentComponent } from './object-component/object-component.component';
import { UtilityService } from './utility.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ArrayComponent,
    ObjectComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
