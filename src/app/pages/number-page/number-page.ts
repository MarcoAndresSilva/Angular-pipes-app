import { DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-number-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './number-page.html',
})
export default class NumberPage {
  totalSells() {
    return 2567789.5567;
  }
  percent = 0.4856;
}
