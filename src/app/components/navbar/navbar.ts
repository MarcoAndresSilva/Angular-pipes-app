import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
})
export class Navbar {
  routes = routes.map((route) => ({
    title: route.title,
    path: route.path,
  }));
}
