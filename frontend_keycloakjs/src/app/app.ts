import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// für keycloak erweiterung: 
import { CommonModule } from '@angular/common';
import { KeycloakService } from './keycloak.service';
@Component({
  selector: 'ohauru-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'keycloakjs';
  private keycloak = inject(KeycloakService);
  username = this.keycloak.getUsername();
  token = this.keycloak.getTokenHr();
  header = this.keycloak.getHeaderHr();
  signature = this.keycloak.getSignatureHr();

  logout() {
    this.keycloak.logout();
  }
}
