<template>
  <div class="container py-5">
    <button class="btn btn-outline-primary mb-4" @click="voltar()">
      &larr; Voltar
    </button>

    <div v-if="carregando" class="text-center">
      <div class="spinner-border">
        <span class="visually-hidden">Carregando</span>
      </div>
    </div>

    <div v-else>
      <div v-if="erro" class="erro">
        <p class="mb-3">Não foi possível carregar os dados do deputado.</p>
        <button class="btn btn-outline-primary" @click="buscarDetalhes()">
          Tentar novamente
        </button>
      </div>

      <div v-else class="card shadow-sm">
        <div class="card-body">
          <div class="d-flex align-items-center gap-3 mb-4">
            <img
              class="foto rounded-circle"
              :src="status.urlFoto"
              :alt="status.nome"
            />
            <div>
              <h2 class="nome">{{ status.nome }}</h2>
              <p class="partido">
                {{ status.siglaPartido }} - {{ status.siglaUf }}
              </p>
            </div>
          </div>

          <h5 class="subtitulo">Contato</h5>
          <p class="mb-2">
            <strong>E-mail:</strong>
            {{ status.email || gabinete.email || "Não informado" }}
          </p>
          <p class="mb-2">
            <strong>Telefone do gabinete:</strong>
            {{ gabinete.telefone || "Não informado" }}
          </p>
          <p class="mb-4">
            <strong>Gabinete:</strong>
            <span v-if="gabinete.predio || gabinete.sala">
              Prédio {{ gabinete.predio }}, sala {{ gabinete.sala }}, andar
              {{ gabinete.andar }}
            </span>
            <span v-else>Não informado</span>
          </p>

          <h5 class="subtitulo">Redes sociais</h5>
          <div v-if="redesSociais.length > 0">
            <p class="mb-2" v-for="rede in redesSociais" :key="rede">
              <a :href="rede" target="_blank">{{ rede }}</a>
            </p>
          </div>
          <p v-else class="text-muted">Nenhuma rede social informada.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetalheDeputadoComponent",
  emits: ["voltar"],
  props: {
    id: Number,
  },
  data() {
    return {
      status: {},
      gabinete: {},
      redesSociais: [],
      carregando: true,
      erro: false,
    };
  },
  mounted() {
    this.buscarDetalhes();
  },
  methods: {
    async buscarDetalhes() {
      try {
        this.carregando = true;
        this.erro = false;
        const url = `https://dadosabertos.camara.leg.br/api/v2/deputados/${this.id}`;
        const resposta = await fetch(url);
        const json = await resposta.json();
        this.status = json.dados.ultimoStatus || {};
        this.gabinete = this.status.gabinete || {};
        this.redesSociais = json.dados.redeSocial || [];
        this.carregando = false;
      } catch (error) {
        console.error("Erro ao buscar detalhes: ", error);
        this.erro = true;
        this.carregando = false;
      }
    },
    voltar() {
      this.$emit("voltar");
    },
  },
};
</script>

<style scoped>
.foto {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border: 4px solid #f2b705;
}

.nome {
  color: #14365f;
}

.partido {
  margin: 0;
  color: #1d4e89;
  font-weight: bold;
}

.subtitulo {
  padding-bottom: 4px;
  color: #14365f;
  border-bottom: 2px solid #f2b705;
}

.erro {
  padding: 16px;
  color: #842029;
  background-color: #f8d7da;
  border-radius: 8px;
}
</style>