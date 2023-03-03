import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Balance } from './shared/balance';
import { BigFive } from './shared/big-five';
import { BigFiveTable } from './shared/big-five-table';
import { CashFlow } from './shared/cash-flow';
import { Income } from './shared/income';

@Injectable()
export class DataService {
  BASE_URL = 'https://financialmodelingprep.com/api/v3';
  API_KEY = '747ef7de24ccd8d2b6e4d4a97564d37b';

  api_mapper = {
    income: 'income-statement',
    balance: 'balance-sheet-statement',
    cash: 'cash-flow-statement',
  };

  chart: BigFive = new BigFive();
  table: BigFiveTable = new BigFiveTable();

  constructor(private http: HttpClient) {}

  getBigFive(ticker: string) {
    this.getIncomeSheetData('income-statement', ticker);
    this.getBalanceSheetData('balance-sheet-statement', ticker);
    this.getCashFlowSheetData('cash-flow-statement', ticker);
    // this.getSheetData('company-outlook', ticker);
  }

  getIncomeSheetData(sheet: string, ticker: string) {
    this.http
      .get<Array<Income>>(this.getSheetAPI(sheet, ticker))
      .subscribe((data: Array<Income>) => {
        this.table.date = data.map((s) => s.calendarYear).reverse();
        this.table.revenue = data.map((s) => s.revenue).reverse();
        this.table.eps = data.map((s) => s.eps).reverse();
        this.table.netIncome = data.map((s) => s.netIncome).reverse();
        this.table.incomeBeforeTax = data
          .map((s) => s.incomeBeforeTax)
          .reverse();
        this.table.incomeTaxExpense = data
          .map((s) => s.incomeTaxExpense)
          .reverse();
        this.table.operatingIncome = data
          .map((s) => s.operatingIncome)
          .reverse();

        // incomeBeforeTax
        // incomeTaxExpense

        // this.chart.income = data.map(
        //   (s) =>
        //     ({
        //       date: s.date,
        //       revenue: s.revenue,
        //       eps: s.eps,
        //       netIncome: s.netIncome,
        //     } as Income)
        // );

        // console.log(data);
        // console.log(this.chart.income);
      });
  }

  getBalanceSheetData(sheet: string, ticker: string) {
    this.http
      .get<Array<Balance>>(this.getSheetAPI(sheet, ticker))
      .subscribe((data: Array<Balance>) => {
        // this.chart.balance = data.map(
        //   (b) =>
        //     ({
        //       netDebt: b.netDebt,
        //       totalEquity: b.totalEquity,
        //     } as Balance)
        // );
        this.table.netDebt = data.map((s) => s.netDebt).reverse();
        this.table.totalEquity = data.map((s) => s.totalEquity).reverse();
        // console.log(data);
        // console.log(this.chart.balance);
      });
  }

  getCashFlowSheetData(sheet: string, ticker: string) {
    this.http
      .get<Array<CashFlow>>(this.getSheetAPI(sheet, ticker))
      .subscribe((data: Array<CashFlow>) => {
        // this.chart.cashFlow = data.map((q) => ({
        //   freeCashFlow: q.freeCashFlow,
        // }));
        this.table.freeCashFlow = data.map((s) => s.freeCashFlow).reverse();
        // console.log(data);
        // console.log(this.chart.cashFlow);
      });
  }

  getSheetAPI(sheet: string, ticker: string) {
    return `${this.BASE_URL}/${sheet}/${ticker}?apikey=${this.API_KEY}`;
  }
}
