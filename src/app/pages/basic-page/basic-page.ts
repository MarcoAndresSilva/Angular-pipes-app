import { LowerCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
  nameLower = signal('marco silva');
  nameUpper = signal('MARCO SILVA');
  fullName = signal('MaRcO sILva');
}
