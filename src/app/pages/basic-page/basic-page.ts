import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
  localeService = inject(LocaleService);
  // currentLocale = signal(this.localeService.getLocal);
  currentLocale = signal(inject(LOCALE_ID));

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

  changeLocale(locale: AvailableLocale) {
    console.log(locale);
    this.localeService.changeLocal(locale);
  }
}
