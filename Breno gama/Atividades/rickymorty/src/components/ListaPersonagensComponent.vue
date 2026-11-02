<template>
  <section>
    <!-- ===== ESTADO: CARREGANDO ===== -->
    <div v-if="loading" class="loading-wrapper text-center py-5">
      <div class="portal-loader"></div>
      <p class="mt-3 text-secondary">Viajando pelo multiverso...</p>
    </div>

    <!-- ===== ESTADO: ERRO ===== -->
    <div v-else-if="erro" class="text-center py-5">
      <p class="fs-1">⚠️</p>
      <p class="text-danger fw-bold">{{ erro }}</p>
      <button class="btn btn-outline-primary mt-2" @click="buscarPersonagens">
        Tentar novamente
      </button>
    </div>

    <!-- ===== ESTADO: DADOS CARREGADOS ===== -->
    <div v-else>

      <!-- Contador de resultados -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <p class="mb-0 text-secondary">
          <span class="fw-bold text-light">{{ info.count }}</span> personagens encontrados
        </p>
        <span class="badge bg-secondary">
          Página {{ paginaAtual }} / {{ info.pages }}
        </span>
      </div>

      <!-- GRID DE CARDS — Bootstrap grid + v-for -->
      <div class="row g-4">
        <div
          v-for="personagem in personagens"
          :key="personagem.id"
          class="col-12 col-md-6 col-lg-4"
        >
          <CardPersonagem :personagem="personagem" />
        </div>
      </div>

      <!-- PAGINAÇÃO (BÔNUS) -->
      <nav class="paginacao d-flex justify-content-center align-items-center gap-3 py-5">
        <!-- Botão Anterior -->
        <button
          class="btn btn-outline-primary"
          @click="paginaAnterior"
          v-show="info.prev"
        >
          ← Anterior
        </button>

        <!-- Indicador de página -->
        <span class="pagina-info">
          {{ paginaAtual }} <span class="text-secondary">de</span> {{ info.pages }}
        </span>

        <!-- Botão Próxima -->
        <button
          class="btn btn-primary"
          @click="proximaPagina"
          v-show="info.next"
        >
          Próxima →
        </button>
      </nav>

    </div>
  </section>
</template>

<script>
import CardPersonagem from './CardPersonagem.vue'

export default {
  name: 'ListaPersonagensComponent',

  components: {
    CardPersonagem
  },

  data() {
    return {
      personagens: [],   // array de objetos vindos da API
      info: {},          // objeto { count, pages, next, prev }
      loading: false,    // estado de carregamento
      erro: null,        // mensagem de erro (se houver)
      urlAtual: 'https://rickandmortyapi.com/api/character',  // URL da página atual
      paginaAtual: 1     // número da página exibida
    }
  },

  // Lifecycle hook: busca os dados assim que o componente é criado
  created() {
    this.buscarPersonagens()
  },

  methods: {
    // Busca personagens no endpoint atual usando fetch + async/await
    async buscarPersonagens() {
      this.loading = true
      this.erro = null

      try {
        const response = await fetch(this.urlAtual)

        if (!response.ok) {
          throw new Error(`Erro ${response.status}: não foi possível carregar os personagens.`)
        }

        const data = await response.json()
        this.personagens = data.results   // array de personagens
        this.info = data.info             // { count, pages, next, prev }

      } catch (e) {
        this.erro = e.message
      } finally {
        this.loading = false
      }
    },

    // Vai para a próxima página usando o link "info.next" da API
    proximaPagina() {
      if (this.info.next) {
        this.urlAtual = this.info.next
        this.paginaAtual++
        this.buscarPersonagens()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },

    // Volta para a página anterior usando o link "info.prev" da API
    paginaAnterior() {
      if (this.info.prev) {
        this.urlAtual = this.info.prev
        this.paginaAtual--
        this.buscarPersonagens()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
/* ===========================
   LOADER (animação de portal)
   =========================== */
.loading-wrapper {
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.portal-loader {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 4px solid #21262d;
  border-top-color: #39d353;
  border-right-color: #58a6ff;
  animation: girar 0.9s linear infinite;
}

@keyframes girar {
  to { transform: rotate(360deg); }
}

/* ===========================
   PAGINAÇÃO
   =========================== */
.paginacao {
  border-top: 1px solid #21262d;
}

.pagina-info {
  font-size: 1rem;
  font-weight: 700;
  color: #e6edf3;
  min-width: 80px;
  text-align: center;
}

/* Botões de paginação com estilo personalizado */
.btn-outline-primary {
  border-color: #388bfd;
  color: #58a6ff;
  font-weight: 600;
  transition: background-color 0.2s, transform 0.1s;
}

.btn-outline-primary:hover {
  background-color: #388bfd;
  color: #fff;
  transform: scale(1.04);
}

.btn-primary {
  background-color: #238636;
  border-color: #238636;
  color: #fff;
  font-weight: 600;
  transition: background-color 0.2s, transform 0.1s;
}

.btn-primary:hover {
  background-color: #2ea043;
  border-color: #2ea043;
  transform: scale(1.04);
}

/* ===========================
   RESPONSIVIDADE
   =========================== */
@media (max-width: 576px) {
  .pagina-info {
    font-size: 0.9rem;
  }
}
</style>
