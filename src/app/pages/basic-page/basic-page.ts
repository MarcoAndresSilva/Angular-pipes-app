import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
  nameLower = signal('marco silva');
  nameUpper = signal('MARCO SILVA');
  fullName = signal('MaRcO sILva');

  customDate = signal(new Date());

  tickingDateEffect = effect(() => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  changeLocale(locale: string) {
    document.documentElement.lang = locale;
  }
}
