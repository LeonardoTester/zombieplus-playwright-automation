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

# 🚀 Guia de Configuração do Ambiente

---

## 1. Subir os Containers

Dentro da pasta `apps/`, onde está o `docker-compose.yml`, execute:

```bash
docker-compose up -d
```

---

## 2. Acessar o pgAdmin

Abra o navegador e acesse: `http://localhost:16543`

Faça login com as credenciais:

| Campo | Valor           |
| ----- | --------------- |
| Email | admin@qax.com   |
| Senha | pwd123          |

---

3. Na aba **Connection**, preencha:

<br>

| Campo    | Valor    |
| -------- | -------- |
| Host     | postgres |
| Username | postgres |
| Password | pwd123   |

<br>

4. Salve. O banco `zombieplus` já estará disponível (criado pelo `db.sh`).

---

## 4. Inicializar a API (Backend)

Na pasta `apps/api/`, rode o script que conecta e inicializa o banco, depois suba o servidor:

```bash
cd apps/api
./db.sh
npm run dev
```

> O `db.sh` conecta ao banco do Docker e configura as tabelas automaticamente.

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
