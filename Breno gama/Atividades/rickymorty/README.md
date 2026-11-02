# Rick and Morty App 🌀

Aplicação Vue 3 que consome a [API pública do Rick and Morty](https://rickandmortyapi.com/) e exibe os personagens da série em cards responsivos.

## 📋 Descrição

Este projeto lista os personagens da série Rick and Morty com:

- **Nome**, **foto** e **localização** de cada personagem
- **Indicador visual de status**: ponto 🟢 verde (Vivo), 🔴 vermelho (Morto) ou ⚪ cinza (Desconhecido)
- **Paginação funcional** usando os links `info.next` e `info.prev` retornados pela API
- **Estado de carregamento** (loading) com animação enquanto os dados são buscados

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| **Vue 3** (Vue CLI) | Framework principal — `createApp`, SFCs, `data()`, `methods`, `props`, `emits`, `created`, `v-for`, `v-if`, `v-show`, `v-bind`, `v-on` |
| **Bootstrap 5** (CDN) | Grid responsivo (`row`, `col-md-6`, `col-lg-4`, `g-4`), utilitários e botões |
| **CSS Scoped** | Estilização isolada por componente com Flexbox e Media Queries |
| **Fetch API** | Consumo da API com `async/await` |
| **Google Fonts** | Tipografia (Outfit) |

## 📁 Estrutura do Projeto

```
rickymorty/
├── public/
│   └── index.html            # Bootstrap 5 CDN incluído aqui
├── src/
│   ├── main.js               # createApp(App).mount('#app')
│   ├── App.vue               # Header, Hero, Main, Footer
│   └── components/
│       ├── CardPersonagem.vue          # Card individual (props + v-bind:class)
│       └── ListaPersonagensComponent.vue  # Lista + fetch + paginação
├── package.json
└── README.md
```

## 🚀 Como Rodar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v14 ou superior
- npm (incluído no Node.js)

### Passos

```bash
# 1. Acesse a pasta do projeto
cd rickymorty

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run serve
```

O projeto estará disponível em: **http://localhost:8080**

## 🔌 Endpoint da API

```
GET https://rickandmortyapi.com/api/character
```

**Exemplo de resposta:**
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

## 📸 Prints Obrigatórios

### Tela de listagem dos personagens com cards
> *(inserir print aqui)*

### Destaque do ícone de status (vivo / morto)
> *(inserir print aqui)*

---

Desenvolvido para a disciplina de **Desenvolvimento Web** · Vue 3 + Rick and Morty API
