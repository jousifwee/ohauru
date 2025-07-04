import Keycloak from 'keycloak-js';

export class KeycloakService {
    private keycloak = new Keycloak({
        url: 'http://localhost:8080/',
        realm: 'demo-realm',
        clientId: 'angular-app',
    });

    async init(): Promise<boolean> {
        try {
            await this.keycloak.init({
                onLoad: 'login-required',
                checkLoginIframe: false,
            });
            return true;
        } catch (e) {
            console.error('Keycloak init error', e);
            return false;
        }
    }

    getToken() {
        return this.keycloak.token;
    }

    getHeaderHr() {
        return (this.decodeToken(this.getToken(),0));
    }
    getSignatureHr() {
        return (this.decodeToken(this.getToken(),2));
    }
    getTokenHr() {
        return (this.decodeToken(this.getToken(),1));
    }

    getUsername() {
        return this.keycloak.tokenParsed?.['preferred_username'];
    }

    logout() {
        this.keycloak.logout();
    }

    private decodeToken(token: string | undefined, index:number): string {
        try {
            if (token === undefined) { return "" };
            const payload = token.split('.')[index];
            const decoded = atob(payload);
            // return decoded;// JSON.parse(decoded);
            const ret =  JSON.stringify(JSON.parse(decoded), null, 2);//.replace(/\n/g, '<br>');
            console.warn(ret);
            return ret;
        } catch (e) {
            return 'Token konnte nicht dekodiert werden' ;
        }
    }
}
