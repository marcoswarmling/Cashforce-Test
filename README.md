# Cashforce Teste

Projeto feito para o processo seletivo da empresa Cashforce "https://cashforce.com.br/".

## REQUISITOS PARA RODAR O PROJETO LOCALMENTE

**NodeJS**

```
https://nodejs.org/en/download/
```

**Mysql**

```
https://www.mysql.com/downloads/
```

## Como iniciar o projeto

### backend

Primeiramente va até onde esta armazenado o seu projeto, entre na pasta backend e modifique o arquivo **config.example.json**
com seus dados do mysql, assim que o arquivo for modificado mude o nome do arquivo para **config.json**.
Em seguida ainda na pasta backend execute os seguintes comandos:

```
npm install
```

```
npx sequelize db:create
```

```
npm start
```

assim a parte do backend estara rodando

###frontend
Vá onde esta armazenado se projeto e entre na pasta frontend, em seguida execute os seguintes comandos:

```
npm install
```

```
npm run serve
```

### Site

por padrão do vueJs o site sera localizado no seguinte link

```
http://localhost:8080/
```
