# 🧟 Projeto de Automação ZombiePlus

> 🚧 **Status do Projeto:** Em desenvolvimento (Work In Progress). 
> Este repositório está sendo construído como parte de um estudo prático de automação com Playwright e Docker.

Este repositório contém uma suíte de testes automatizados E2E para a aplicação **ZombiePlus**.

## 🚀 Tecnologias
* **Playwright**
* **Docker & Docker Compose**
* **PostgreSQL**

## 📈 Roadmap (O que eu fiz)
- [x] Configuração inicial do repositório no GitHub.
- [x] Estruturação das pastas do projeto (`apps` e `projects`).
- [x] Configuração do `docker-compose.yml` para subir Postgres e App.
- [x] Implementação dos primeiros testes de Login com Playwright.
- [x] Criação de Page Objects para a plataforma ZombiePlus.
- [x] Implementação de testes de Landing Page (Leads).
- [x] Criação de componentes compartilhados (Toast).

---

## 🛠️ Guia de Configuração e Execução

Para que os testes funcionem, o ambiente precisa ser preparado seguindo a ordem abaixo:

### 1. Subir os Containers
Abra o terminal na pasta onde está o arquivo `docker-compose.yml` e execute:
```bash
docker-compose up -d

### 2. Configurar o pgAdmin
Acesse o gerenciador do banco de dados pelo navegador:

* *URL:* http://localhost:16543
* **Login:** admin@qax.com
* **Senha:** pwd123

### 3. Configurar o Servidor e Banco de Dados
Dentro do painel do pgAdmin, realize as seguintes configurações:

**Criar Server:**
* Clique com o botão direito em **Servers** -> **Register** -> **Server**.
* **Nome:** `pgdb`

**Configurar Conexão:**
* Na aba **Connection**, insira os dados do seu Docker:
* **Username:** `postgres`
* **Password:** `pwd123`

**Criar Database:**
* Clique com o botão direito em **Databases** -> **Create** -> **Database**.
* **Nome:** `zombieplus` (conforme exigido pelo Sequelize na API).

### 4. Inicializar a API (Backend)
Vá para a pasta da API para configurar as tabelas e subir o servidor:

```bash
cd apps/api
./db.sh
npm run dev

### 5. Inicializar o Front-end (Web)
Em um novo terminal, entre na pasta web e suba o site:

```bash
cd apps/web
npm run dev
URL: http://localhost:3000

### 6. Executar os Testes Automatizados
Com a aplicação e o banco ativos, abra um terceiro terminal para rodar o Playwright:

```bash
cd projects
npm install
npx playwright test

---

Desenvolvido por **Leonardo** 🚀



