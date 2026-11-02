# 🌀 Rick and Morty App

> Aplicação Vue 3 que consome a API pública do Rick and Morty e exibe os personagens da série em cards responsivos.

---

## 📸 Prints da Aplicação

### Tela de listagem dos personagens com cards

![Listagem de personagens](./docs/print-listagem.png)

### Indicação visual de status — Vivo / Morto / Desconhecido

![Indicação de status vivo/morto](./docs/print-status.png)

> 🟢 **Vivo** — ponto verde | 🔴 **Morto** — ponto vermelho | ⚪ **Desconhecido** — ponto cinza

---

## 📋 Descrição do Projeto

Este projeto foi desenvolvido para a disciplina de **Desenvolvimento Web** e consiste em uma listagem de personagens da série *Rick and Morty* utilizando a [API pública oficial](https://rickandmortyapi.com/).

### Funcionalidades

- Listagem de personagens em cards responsivos
- Cada card exibe: **foto**, **nome**, **espécie**, **localização** e **origem**
- **Indicador visual de status**: ponto colorido diferenciando personagens **Vivos** (🟢), **Mortos** (🔴) e **Desconhecidos** (⚪)
- **Estado de carregamento** (loading) com animação enquanto os dados são buscados
- **Paginação funcional** usando os links `info.next` e `info.prev` retornados pela API *(bônus)*

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| **Vue 3** (Vue CLI) | Framework principal |
| **Bootstrap 5** (CDN) | Grid responsivo e componentes visuais |
| **CSS Scoped** | Estilização isolada por componente |
| **Fetch API** | Consumo da API com `async/await` |
| **Google Fonts** | Tipografia (Outfit) |

### Conceitos Vue 3 aplicados

- `createApp` + Single File Components (`.vue`)
- `data()` e `methods`
- `props` para comunicação entre componentes
- Lifecycle hook `created` para busca inicial de dados
- Diretivas: `v-if` / `v-else`, `v-for` + `:key`, `v-show`, `v-bind` (`:class`, `:src`), `v-on` (`@click`)
- `fetch` + `async/await` com estado de carregamento (`loading`)
- CSS Scoped com Flexbox e Media Queries

---

## 📁 Estrutura do Projeto

```
rickymorty/
├── docs/
│   ├── print-listagem.png        ← Print da listagem de cards
│   └── print-status.png          ← Print do indicador de status
├── public/
│   └── index.html                ← Bootstrap 5 CDN incluído aqui
├── src/
│   ├── main.js                   ← createApp(App).mount('#app')
│   ├── App.vue                   ← Estrutura principal (header, main, footer)
│   └── components/
│       ├── CardPersonagem.vue              ← Card individual do personagem
│       └── ListaPersonagensComponent.vue   ← Lista + fetch + paginação
├── package.json
└── README.md
```

---

## 🔌 API Utilizada

**Endpoint:** `GET https://rickandmortyapi.com/api/character`

```json
{
  "info": {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "location": { "name": "Citadel of Ricks" },
      "origin": { "name": "Earth (C-137)" }
    }
  ]
}
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v14 ou superior
- npm (incluído no Node.js)

### Passo a passo

```bash
# 1. Clone o repositório ou acesse a pasta do projeto
cd "Breno gama/Atividades/rickymorty"

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run serve
```

Acesse em: **http://localhost:8080**

---

Desenvolvido por **Breno Gama de Miranda** · Disciplina de Desenvolvimento Web
