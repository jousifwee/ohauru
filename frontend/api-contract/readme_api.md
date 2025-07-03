

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
  -i ./api.json \
  -g typescript-angular \
  -o ../scr/app/generated-api \
  --additional-properties=providedInRoot=true,withInterfaces=true,stringEnums=true,ngVersion=20.0.0

  openapi-generator generate \
  -i ./api-contract/api.json \
  -g typescript-angular \
  -o ./scr/app/generated-api \
  --additional-properties=withInterfaces=true,stringEnums=true,skipFormModel=true,apiFileName=api,modelFileName=models


```