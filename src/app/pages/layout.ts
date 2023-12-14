import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule],
  template: `<h1>Angular Router App</h1>
    <!-- This nav gives you links to click, which tells the router which route to use (defined in the routes constant in  AppRoutingModule) -->
    <nav>
      <ul>
        <li>
          <a
            routerLink="/home"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            >Accueil</a
          >
        </li>
        <li>
          <a
            routerLink="/admin/users"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            >Utilisateurs</a
          >
        </li>
      </ul>
    </nav>
    <!-- The routed views render in the <router-outlet>-->
    <router-outlet></router-outlet>`,
})
export class RootComponent {
  constructor(private appService: AppService) {
    console.log(appService.getHello());
  }
}
