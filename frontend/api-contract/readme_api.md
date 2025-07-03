

als admin in powershell ```choco install wget```


```
mkdir -p ~/openapi-gen
cd ~/openapi-gen
wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/7.6.0/openapi-generator-cli-7.6.0.jar -O openapi-generator-cli.jar
```

```
alias openapi-generator='java -jar ~/openapi-gen/openapi-generator-cli.jar'
```
-> am besten in .bashrc
source ~/.bashrc 

cd <projekt>/frontend/api-contract (z.b.   cd /c/work/angular/ohauru/frontend/api-contract/ )
curl http://localhost:18080/v3/api-docs -o api.json


```
openapi-generator generate \
  -i ./api-contract/api.json \
  -g typescript-angular \
  -o ./src/app/api/todo_api \
  --additional-properties=providedInRoot=true,withInterfaces=true,stringEnums=true,ngVersion=20.0.0,modelSuffix=Dto,serviceSuffix=Api

  
  
  --additional-properties=withInterfaces=true,stringEnums=true,skipFormModel=true,apiFileName=api,modelFileName=models


```

```
src/
├── main.ts          ← Einstiegspunkt (bootstrap)
├── app/
│   ├── app.ts       ← exportiert Komponente & Konfiguration
│   ├── app.config.ts
│   ├── app.component.ts (optional)
│   ├── api/todo_api       ← OpenAPI-Client
│   └── ...




```


main.ts erweitern
```
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));





```
Access to XMLHttpRequest at 'http://localhost:18080/todos' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource

