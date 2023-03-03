import { Balance } from './balance';
import { CashFlow } from './cash-flow';
import { Income } from './income';

export class BigFive {
  income: Array<Income> = [];
  cashFlow: Array<CashFlow> = [];
  balance: Array<Balance> = [];
}
