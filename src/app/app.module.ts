import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectorComponent } from './selector/selector.component';
import { ShowerComponent } from './shower/shower.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './data.service';
import { ThreshColorDirective } from './thresh-color.directive';

@NgModule({
  declarations: [AppComponent, SelectorComponent, ShowerComponent, ThreshColorDirective],
  imports: [BrowserModule, HttpClientModule, FormsModule, NgbModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
