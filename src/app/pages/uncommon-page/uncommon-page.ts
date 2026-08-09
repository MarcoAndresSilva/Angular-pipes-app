import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card';
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

const clientOne = {
  name: 'Juli',
  gender: 'female',
  age: 3,
  address: 'Calle falsa 123',
};

const clientTwo = {
  name: 'Marco',
  gender: 'male',
  age: 2,
  address: 'Calle verdadera 456',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
  // i18nSelect
  client = signal(clientOne);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changueClient() {
    if (this.client().name === 'Juli') {
      this.client.set(clientTwo);
      return;
    }
    this.client.set(clientOne);
  }

  // i18nPlural
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  });
  clients = signal(['Lila', 'Juli', 'Bubu', 'papi', 'summeer', 'marco']);
  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }
}
