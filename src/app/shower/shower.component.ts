import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { BigFiveTable } from '../shared/big-five-table';

@Component({
  selector: 'app-shower',
  templateUrl: './shower.component.html',
  styleUrls: ['./shower.component.sass'],
})
export class ShowerComponent implements OnInit {
  @Input() showExtra: boolean = false;

  threshHold: number = 1.1;

  table: BigFiveTable = new BigFiveTable();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.table = this.dataService.table;
  }

  getValidChangeClass(val: number | null) {
    if (val) {
      if (val > this.threshHold) {
        return 'green';
      }
    }
    return 'red';
  }
}
