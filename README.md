# Sistema de Solicitações de Serviços Públicos

Sistema web desenvolvido para registrar e acompanhar solicitações de serviços públicos. A aplicação permite que usuários criem chamados, informem os detalhes da solicitação e acompanhem seu andamento.

O projeto foi desenvolvido como parte das atividades do curso de Engenharia de Software, com o objetivo de aplicar na prática conceitos de desenvolvimento web, APIs REST, organização de código e integração entre frontend e backend.

## Sobre o projeto

A ideia do sistema é oferecer uma forma simples de registrar e acompanhar solicitações relacionadas a serviços públicos.

O usuário pode criar uma solicitação informando os dados necessários, consultar seus chamados e acompanhar as atualizações de status.

A aplicação é dividida em duas partes: um frontend desenvolvido em React e um backend desenvolvido em Java com Spring Boot. A comunicação entre as duas partes é realizada através de uma API REST.

## Funcionalidades

* Cadastro de usuários
* Login e autenticação
* Criação de solicitações
* Visualização dos chamados cadastrados
* Acompanhamento das solicitações
* Atualização do status dos chamados
* Definição de prioridade
* Registro de localização
* Dashboard com informações das solicitações

## Tecnologias utilizadas

### Frontend

* React
* TypeScript
* Vite
* CSS
* API REST

### Backend

* Java
* Spring Boot
* Spring Web
* Maven

## Estrutura do projeto

O projeto está dividido em duas aplicações:

```text
AEP_Entrega_02/
│
├── frontend/
│   └── src/
│       ├── pages/
│       ├── services/
│       └── ...
│
└── backend/
    └── src/
        └── main/
            └── java/
                └── com/
                    └── AEP/
                        └── backend/
                            ├── controller/
                            ├── dto/
                            ├── model/
                            ├── repository/
                            ├── service/
                            └── ...
```

No backend, o código é organizado em diferentes camadas, separando responsabilidades entre controllers, services, repositories, models e DTOs.

No frontend, as páginas e serviços são organizados de forma separada, facilitando a manutenção e o desenvolvimento da aplicação.

## Comunicação entre frontend e backend

O frontend realiza requisições HTTP para os endpoints disponibilizados pelo backend.

O fluxo principal da aplicação pode ser representado da seguinte forma:

```text
Usuário
   ↓
React + TypeScript
   ↓
API REST
   ↓
Spring Boot
   ↓
Services
   ↓
Repositories
   ↓
Banco de dados
```

As chamadas para a API são centralizadas na camada de serviços do frontend, mantendo a comunicação com o backend organizada.

## Principais páginas

O sistema possui as seguintes páginas:

* **Login:** acesso à aplicação.
* **Cadastro:** criação de novos usuários.
* **Dashboard:** visualização geral das informações.
* **Novo Chamado:** criação de uma nova solicitação.
* **Meus Chamados:** consulta das solicitações cadastradas pelo usuário.
* **Acompanhar:** acompanhamento do andamento das solicitações.

## Como executar

### Pré-requisitos

Para executar o projeto, é necessário ter instalado:

* Node.js
* npm
* Java JDK
* Maven

### Frontend

Entre na pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npm run dev
```

O endereço da aplicação será exibido no terminal após a inicialização.

### Backend

Entre na pasta do backend:

```bash
cd backend
```

Execute a aplicação:

```bash
mvn spring-boot:run
```

Dependendo da configuração do ambiente, pode ser necessário configurar a conexão com o banco de dados antes de iniciar o backend.

## Objetivo acadêmico

O projeto foi desenvolvido durante o curso de Engenharia de Software como forma de aplicar conceitos de desenvolvimento de aplicações web e integração entre diferentes tecnologias.

Durante o desenvolvimento foram trabalhados conceitos como:

* Desenvolvimento de APIs REST
* Programação orientada a objetos
* Arquitetura em camadas
* Separação de responsabilidades
* Desenvolvimento de interfaces com React
* TypeScript
* Integração entre frontend e backend
* Organização e manutenção de código

---

Projeto desenvolvido para fins acadêmicos e de aprendizado.
