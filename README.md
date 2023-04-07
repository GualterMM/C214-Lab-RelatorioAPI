# Projeto API em Node
Um projeto de API utilizando NodeJS, Express, Sequelize e SQLite. A aplicação consiste em um simples CRUD de um banco de dados de filmes.

## 🔧 Pré-requisitos
1. Instalação do [NodeJS](https://nodejs.org/).
2. Uma ferramenta que possibilite o envio e recebimento de requisições HTTP, como um browser ou [Postman](https://www.postman.com/).
3. Uma ferramenta de terminal.

## 🚀 Instalando o projeto
Crie um novo diretório no seu sistem operacional o qual você deseja instalar o projeto.
Depois, clone o respositório utilizando o seguinte comando:

```
git clone https://github.com/GualterMM/C214-Lab-RelatorioAPI.git
```

Com o repositório clonado, abra sua ferramenta de terminal no diretório do projeto e instale as dependências do projeto usando o comando:

```
npm install
```

Por último, para executar o projeto, utilize um dos seguintes comandos:

```
npm start
```

```
npm run start
```

## 💻 Utilizando a API
**IMPORTANTE: O servidor é criado utilizando a porta 3000. Certifique-se que essa porta está liberada para uso no seu dispositivo.**  
Com o servidor rodando, a URL do mesmo é `http://localhost:3000`. Todas as rotas daqui em diante referidas **devem precedir à rota raiz**.  

## GET

### Buscar rota raíz
* **URL**
  * `/`
* **Parâmetros de URL**
  * _Nenhum_
* **Parâmetros de corpo da requisição**
  * _Nenhum_
* **Resposta de sucesso**
  * **Código**: 200
  * **Conteúdo**: "Você chegou no diretório raiz. Cheque a documentação no GitHub para se orientar sobre as rotas da API."  

### Buscar rota padrão da API
* **URL**
  * `/api`
* **Parâmetros de URL**
  * _Nenhum_
* **Parâmetros de corpo da requisição**
  * _Nenhum_
* **Resposta de sucesso**
  * **Código**: 200
  * **Conteúdo**:
    ```
    {
      "message": "Rotas disponíveis",
      "routes": [
          "http://localhost:3000/",
          "http://localhost:3000/api",
          "http://localhost:3000/api/filmes",
          "http://localhost:3000/api/filmes/:id"
      ]
    }
    ```

### Buscar todos os filmes
* **URL**
  * `/api/filmes`
* **Parâmetros de URL**
  * _Nenhum_
* **Parâmetros de corpo da requisição**
  * _Nenhum_
* **Resposta de sucesso**
  * **Código**: 200
  * **Conteúdo**:
    ```
    [
      {
          "id": id,
          "nome": "Nome do filme",
          "lancamento": "YYYY-MM-DD",
          "produtora": "Nome da produtora",
          "duracao": "HH:MM:SS",
          "avaliacao": avaliação
      },
      ...
    ]
    ```
* **Resposta de erro**
  * **Código**: 500
  
### Buscar filme por ID
* **URL**
  * `/api/filmes/<id>`
* **Parâmetros de URL**
  * `<id>`: ID do filme desejado.
* **Parâmetros de corpo da requisição**
  * _Nenhum_
* **Resposta de sucesso**
  * **Código**: 200
  * **Conteúdo**:
    ```
    {
        "id": <id>,
        "nome": "Nome do filme",
        "lancamento": "YYYY-MM-DD",
        "produtora": "Nome da produtora",
        "duracao": "HH:MM:SS",
        "avaliacao": avaliação
    }
    ```
* **Resposta de erro**
  * **Código**: 500

## POST

### Inserir filme
* **URL**
  * `/api/filmes`
* **Parâmetros de URL**
  * _Nenhum_
* **Parâmetros de corpo da requisição**
  * **Obrigatórios**: `nome`, `lancamento`, `produtora`, `duracao`, `avaliacao`
  * **Opcionais**: `id`
    ```
    {
        "nome": "Nome do filme",
        "lancamento": "YYYY-MM-DD",
        "produtora": "Nome da produtora",
        "duracao": "HH:MM:SS",
        "avaliacao": avaliação
    }
    ```
    
* **Resposta de sucesso**
  * **Código**: 201
  * **Conteúdo**:
    ```
    {
        "message": "Filme inserido com sucesso.",
        "id": id,
        "nome": "Nome do filme",
        "lancamento": "YYYY-MM-DD",
        "produtora": "Nome da produtora",
        "duracao": "HH:MM:SS",
        "avaliacao": avaliação
    }
    ```
* **Resposta de erro**
  * **Código**: 500
  * **Conteúdo**: `ValidationError: <mensagem de erro de validação>`

## PATCH

### Atualizar filme
* **URL**
  * `/api/filmes/<id>`
* **Parâmetros de URL**
  * `<id>`: ID do filme desejado.
* **Parâmetros de corpo da requisição**
  * **Opcionais**: `nome`, `lancamento`, `produtora`, `duracao`, `avaliacao`
    ```
    {
        "nome": "Nome do filme",
        "lancamento": "YYYY-MM-DD"
    }
    ```
    
* **Resposta de sucesso**
  * **Código**: 200
  * **Conteúdo**:
    ```
    {
        "message": "Cadastro atualizado com sucesso."
    }
    ```
    
* **Resposta de erro**
  * **Código**: 400
  * **Conteúdo**:
    ```
    {
        "message": "Falha ao atualizar cadastro."
    }
    ``` 
  * **Código**: 500
  * **Conteúdo**: `ValidationError: <mensagem de erro de validação>`

## DELETE

### Remover filme
* **URL**
  * `/api/filmes/<id>`
* **Parâmetros de URL**
  * `<id>`: ID do filme desejado.
* **Parâmetros de corpo da requisição**
  * _Nenhum_
    
* **Resposta de sucesso**
  * **Código**: 200
  * **Conteúdo**:
    ```
    {
        "message": "Filme removido com sucesso."
    }
    ```
    
* **Resposta de erro**
  * **Código**: 400
  * **Conteúdo**: 
    ```
    {
        "message": "Filme removido com sucesso."
    }
    ``` 
  * **Código**: 500
