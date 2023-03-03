import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Income } from '../shared/income';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.sass'],
})
export class SelectorComponent implements OnInit {
  @Output() toggleExtraData = new EventEmitter<void>();

  ticker: string = 'AAPL';
  incomeSheetData: Array<Income> = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  onGetBigFive() {
    this.dataService.getBigFive(this.ticker);
  }

  onToggleExtraData() {
    this.toggleExtraData.emit();
  }
}
