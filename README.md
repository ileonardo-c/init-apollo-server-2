# Apollo Server

> Servidor GraphQL no Node.JS HTTP Server, ou em ambientes "sem servidor".

Demonstração simples do Servidor Apollo GraphQL escrito em **ES6**, usando **Babel** para organizar os **schemas** e ter o apoio de variáveis de ambiente para personalizar as configurações.

## Requisitos

> - [apollo-server](https://github.com/apollographql/apollo-server#readme): **v2.3.1**
> - **Plugins ES6:**
>   - @babel/core: **v7.2.2**
>   - @babel/register: **v7.0.0**
>   - @babel/preset-env: **v7.2.3**
> - **Dependências:**
>   - [nodemon](http://nodemon.io): **v1.18.9** - Watch Javascript
>   - [dotenv](https://github.com/motdotla/dotenv#readme): **v6.2.0** - Carrega variáveis de ambiente de `.env` para projetos de Node.JS
>   - [babel-plugin-import-graphql](https://www.apollographql.com/docs/react/recipes/babel.html): **v2.6.2** - Importar arquivos `[*.gql, *.graphql]`
> - **Editor usado:**
>   - Visual Studio Code
>     - [editorconfig.editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): **EditorConfig for VS Code**

## Configuração do projeto

```bash
# install dependencies
npm install

# Start Server Watch in http://localhost:4000 (default)
npm run start
```

## Árvore (tree)

```
.
|   .babelrc
|   .editorconfig
|   .env (API)
|   .gitignore
|   LICENSE
|   package.json
|   README.md
|
\---src (project)
    |   app.js (Server)
    |
    +---resolvers
    |   |   index.js
    |   |
    |   +---mutation
    |   \---query
    |
    \---schema
        \   index.gql
```

## Licença

> [MIT License](https://github.com/ileonardo-c/init-apollo-server-2/blob/master/LICENSE)

Copyright © 2019 [Leonardo C. Carvalho](https://github.com/ileonardo-c)
