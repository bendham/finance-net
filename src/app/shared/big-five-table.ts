import { map } from 'rxjs';

export class BigFiveTable {
  date: string[] = [];
  freeCashFlow: number[] = [];
  revenue: number[] = [];
  eps: number[] = [];
  netIncome: number[] = [];
  netDebt: number[] = [];
  totalEquity: number[] = [];
  incomeTaxExpense: number[] = [];
  incomeBeforeTax: number[] = [];
  operatingIncome: number[] = [];

  get changeDates() {
    return this.date
      .map((val, idx) => {
        if (idx !== this.date.length) {
          var next = this.date[idx + 1];
          return `${val} to ${next}`;
        } else {
          return null;
        }
      })
      .slice(0, -1);
  }

  get roic() {
    let roic = [];
    for (let i = 0; i < this.date.length; i++) {
      let val =
        (this.operatingIncome[i] *
          (1 - this.incomeTaxExpense[i] / this.incomeBeforeTax[i])) /
        (this.totalEquity[i] + this.netDebt[i]);
      roic.push(val);
      console.log(val);
      console.log(this.date[i]);
    }
    return roic;
  }

  get roicChange() {
    return this.returnGeneric(this.roic);
  }

  get freeCashFlowChange() {
    return this.returnGeneric(this.freeCashFlow);
  }

  get revenueChange() {
    return this.returnGeneric(this.revenue);
  }

  get epsChange() {
    return this.returnGeneric(this.eps);
  }

  get netIncomeChange() {
    return this.returnGeneric(this.netIncome);
  }

  get netDebtChange() {
    return this.returnGeneric(this.netDebt);
  }

  get totalEquityChange() {
    return this.returnGeneric(this.totalEquity);
  }

  returnGeneric(arr: number[]) {
    return arr
      .map((val, idx) => {
        if (idx !== arr.length) {
          var next = arr[idx + 1];
          return next / val;
        } else {
          return null;
        }
      })
      .slice(0, -1);
  }
}
