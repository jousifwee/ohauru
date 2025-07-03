# OhAuRu
## OhAuRu


```
npx -p @angular/cli@20 ng new OhAuRu --directory=ohauru --strict --routing --skip-tests=false --style=scss --package-manager=npm --prefix=ohauru --standalone
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.
```



configuration folder mit keycloak konfiguration
mit bash nach configuration wechseln
docker-compose up

neu erzeugen des Docker mit neueinlesen des Exports: docker-compose up --build

keycloak login unter http://localhost:8080   admin/admin



## keycloak zugangsdaten
| Zweck          | Wert                                                       |
| -------------- | ---------------------------------------------------------- |
| Admin Console  | [http://localhost:8080/admin](http://localhost:8080/admin) |
| Admin User     | `admin / admin`                                            |
| Realm          | `demo-realm`                                               |
| Dev User       | `user1 / test`                                             |
| Angular Client | `angular-app`                                              |
| Backend Client | `spring-backend` (mit Secret)                              |


## keycloak test mit curl
```
curl -X POST \
  http://localhost:8080/realms/demo-realm/protocol/openid-connect/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=password&client_id=angular-app&username=user1&password=test"
```



# backend
cd backend
mvn -N io.takari:maven:wrapper

dann
./mvnw spring-boot:run
http://localhost:18080/swagger-ui/index.html

http://localhost:18080/v3/api-docs

http://localhost:18080/h2-console
spring.datasource.url=jdbc:h2:file:./data/tododb


🧠 Warum existiert _links?
Spring Data REST basiert auf dem REST-Prinzip HATEOAS
(Hypermedia As The Engine Of Application State)

➡️ Die API beschreibt sich selbst über Links – ähnlich wie Webseiten mit <a href>.

✅ Was bringt das?
Vorteil	Bedeutung
🔁 Navigation	Der Client muss keine Routen hardcoden
🔐 Rechtekontextbezogen	Nur erlaubte Links werden angezeigt
🔧 Tool-Integration	Tools wie HAL-Browser, Swagger oder REST-Clients nutzen _links


## h2 konfiguration
```
spring.datasource.url=jdbc:h2:file:./data/tododb
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=create
spring.h2.console.enabled=true
server.port=18080
```

```
    <dependency>
      <groupId>com.h2database</groupId>
      <artifactId>h2</artifactId>
      <scope>runtime</scope>
    </dependency>
```

## postgres konfiguration
```
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.username=myuser
spring.datasource.password=mypass
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=create
server.port=18080
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
