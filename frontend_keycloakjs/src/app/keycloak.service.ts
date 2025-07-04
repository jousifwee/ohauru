import Keycloak from 'keycloak-js';

export class KeycloakService {
    private keycloak: Keycloak;

    constructor() {
        this.keycloak = new Keycloak({
            url: 'https://dein-keycloak-server/auth',
            realm: 'dein-realm',
            clientId: 'angular-app',
        });
    }

    async init(): Promise<boolean> {
        try {
            await this.keycloak.init({
                onLoad: 'login-required',
                checkLoginIframe: false,
            });
            return true;
        } catch (error) {
            console.error('Keycloak init failed', error);
            return false;
        }
    }

    getToken(): string | undefined {
        return this.keycloak.token;
    }

    logout(): void {
        this.keycloak.logout();
    }

    getUsername(): string | undefined {
        return this.keycloak.tokenParsed?.preferred_username;
    }
}
