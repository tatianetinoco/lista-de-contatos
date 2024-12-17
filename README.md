# 📝 Lista de Contato
## Descrição

***Lista de Contatos*** - Uma aplicação web simples para gerenciar contatos. Permite adicionar, visualizar, editar e deletar contatos. Desenvolvida com Node.js, Express, Sequelize, MySQL e interface com HTML, CSS, Bootstrap e JavaScript.

## Funcionalidades
- Adicionar contato.
- Listar contatos salvos.
- Editar contato.
- Excluir contato.

## Tecnologias Utilizadas

### Frontend
- **HTML**
- **CSS**
- **JavaScript**
- **Bootstrap**

### Backend
- **Node.js**
- **Express**
- **Sequelize**
- **MySQL**

## Público-Alvo
A aplicação Lista de Contatos foi projetada para atender usuários que precisam gerenciar informações de contato de forma prática e organizada. O público-alvo inclui:

- **Profissionais autônomos:** para manter o registro de clientes e fornecedores.
- **Pequenas empresas:** para gerenciar contatos de parceiros e equipes.
- **Usuários gerais:** que desejam armazenar e acessar contatos pessoais ou profissionais de maneira centralizada.

O objetivo é oferecer uma solução acessível e intuitiva para pessoas sem experiência técnica avançada, garantindo que qualquer usuário possa gerenciar seus contatos facilmente.


## Interface do Usuário (UI)
A interface da aplicação foi desenvolvida com foco em simplicidade e usabilidade, utilizando princípios de design intuitivo:

- **Navegação Simples:** Layout limpo e organizado, facilitando o acesso às funcionalidades.
- **Componentes Visuais:** Botões e ícones claros, utilizando Bootstrap para uma apresentação moderna.
- **Formulários Validados:** Garantindo que os usuários insiram informações corretas ao adicionar ou editar contatos.
- **Tabela Dinâmica:** Listagem de contatos em formato de tabela com botões de ação (editar e excluir).

Essas escolhas permitem que os usuários tenham uma experiência agradável e eficiente ao interagir com a aplicação.

## Como Executar o Projeto

### Pré-requisitos

Antes de rodar o projeto, certifique-se de ter os seguintes softwares instalados:
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

### Configuração do Backend

1. Clone este repositório:
   ```
   git clone https://github.com/seu-usuario/lista-de-contatos.git

2. Acesse o diretório do projeto:
    ```
    cd lista-de-contatos

3. Entre na pasta backend:
    ```
    cd backend

4. Instale as dependências do backend:
    ```
    npm install

5. Configure as variáveis de ambiente. Crie um arquivo .env e adicione suas configurações do banco de dados:
   
    ```plaintext
    PORT=3000                    # Porta onde o servidor será executado
    DB_HOST=localhost            # Host do banco de dados
    DB_USER=seu_usuario          # Usuário do banco de dados
    DB_PASSWORD=sua_senha        # Senha do banco de dados
    DB_NAME=lista_de_contatos    # Nome do banco de dados
    DB_DIALECT=mysql             # Dialeto utilizado pelo Sequelize

6. Execute as migrations para criar as tabelas no banco de dados:
    ```
    npx sequelize-cli db:migrate

7. Inicie o servidor backend:
    ```
    node server.js

### Configuração do Frontend
1. Acesse o diretório do frontend:
    ```
    cd frontend

2. Abra o arquivo index.html no seu navegador para visualizar a aplicação.

## Endpoints da API


### Base URL
```cs
http://localhost:3000/api/contatos
```

#### **1. Listar todos os contatos**
- **Método:** GET  
- **Rota:** `/`  
- **Descrição:** Retorna uma lista de todos os contatos cadastrados.  
- **Exemplo de Resposta:**
  ```json
  [
    {
      "id": 1,
      "nome": "Nome Um",
      "email": "nome.um@email.com",
      "telefone": "999999999",
      "createdAt": "2024-12-16T00:00:00.000Z",
      "updatedAt": "2024-12-16T00:00:00.000Z"
    }
  ]

#### **2. Adicionar um novo contato**
- **Método:** POST  
- **Rota:** `/`  
- **Descrição:** Adiciona um novo contato ao banco de dados.  
- **Campos Requeridos:**
   - `nome` (string) 
   - `email` (string)
   - `telefone` (string)

- **Exemplo de Requisição:**
  ```json
  [
    {
      "nome": "Nome Dois",
      "email": "nome.dois@email.com",
      "telefone": "999999999",
    }
  ]

- **Exemplo de Resposta:**
  ```json
  [
    {
      "id": 2,
      "nome": "Nome Dois",
      "email": "nome.dois@email.com",
      "telefone": "999999999",
    }
  ]

#### **3. Buscar um contato por ID**
- **Método:** GET  
- **Rota:** `/:id`  
- **Descrição:** Retorna as informações de um contato específico pelo ID.  
- **Exemplo de Resposta:**
  ```json
  [
    {
      "id": 1,
      "nome": "Nome Um",
      "email": "nome.um@email.com",
      "telefone": "999999999",
      "createdAt": "2024-12-16T00:00:00.000Z",
      "updatedAt": "2024-12-16T00:00:00.000Z"
    }
  ]

#### **4. Atualizar um contato**
- **Método:** PUT  
- **Rota:** `/:id`  
- **Descrição:** Atualiza os dados de um contato existente.
- **Campos Permitidos:**
   - `nome` (string) 
   - `email` (string)
   - `telefone` (string)

- **Exemplo de Requisição:**
  ```json
  [
    {
      "nome": "Nome Dois Atualizado",
      "email": "nome.dois.atualizado@email.com",
      "telefone": "999999999",
    }
  ]

- **Exemplo de Resposta:**
  ```json
  [
    {
      "id": 2,
      "nome": "Nome Dois Atualizado",
      "email": "nome.dois.atualizado@email.com",
      "telefone": "999999999",
      "createdAt": "2024-12-16T00:00:00.000Z",
      "updatedAt": "2024-12-16T01:00:00.000Z"
    }
  ]

#### **4. Deletar um contato**
- **Método:** DELETE  
- **Rota:** `/:id`  
- **Descrição:** Remove um contato do banco de dados pelo ID.
- **Exemplo de Resposta:**
  ```json
  [
   {
    "message": "Contato deletado com sucesso!"
   }
  ]


