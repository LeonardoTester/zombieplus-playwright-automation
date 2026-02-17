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

# 🧟 ZombiePlus — Guia de Configuração com Playwright

---

## 1. Subir os Containers

Na raiz do projeto, onde está o `docker-compose.yml`, execute:

```bash
docker-compose up -d
```

> Isso sobe dois containers: o banco de dados **PostgreSQL** (`pgdb`) e o gerenciador **pgAdmin**. O banco `zombieplus` já é criado automaticamente.

---

## 2. Acessar o pgAdmin

Abra o navegador e acesse: `http://localhost:16543`

Faça login com as credenciais:

| Campo | Valor         |
| ----- | ------------- |
| Email | admin@qax.com |
| Senha | pwd123        |

---

## 3. Criar o Servidor no pgAdmin

- Clique com o botão direito em **Servers** → **Register** → **Server**
- Na aba **General**, defina o nome: `pgdb`
- Na aba **Connection**, preencha os dados abaixo e salve:

- | Campo    | Valor    |
- | -------- | -------- |
- | Host     | database |
- | Username | postgres |
- | Password | pwd123   |

> O host é `database` pois é o nome do serviço definido no `docker-compose.yml`.

---

## 4. Inicializar a API (Backend)

Na pasta `apps/api/`, rode o script que **recria as tabelas e popula o banco com seeds**, depois suba o servidor:

```bash
cd apps/api
./db.sh
npm run dev
```

> ⚠️ O `db.sh` apaga todas as tabelas, recria e insere os dados iniciais. Não rode em produção.  
> A API ficará disponível em: `http://localhost:3333`

---

## 5. Inicializar o Front-end

Em um **novo terminal**, na pasta `apps/web/`, suba o front-end:

```bash
cd apps/web
npm run dev
```

> Acesse em: [http://localhost:3000](http://localhost:3000)

---

## 6. Executar os Testes com Playwright

Com Docker, API e front-end ativos, abra um **terceiro terminal** e vá até a pasta `projects/`, onde estão as specs do Playwright:

```bash
cd projects
npm install
npx playwright test
```

---

*Desenvolvido por Leonardo 🚀*
