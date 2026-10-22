<template>
  <div>
    <div v-show="idSelecionado === null" class="container py-5">
      <h1 class="text-center mb-2 fw-bold titulo">Lista de Deputados</h1>
      <p class="text-center text-muted mb-4">
        Clique em um card para ver os detalhes
      </p>

      <div class="text-center mb-5">
        <input
          class="campo-busca"
          type="text"
          placeholder="Buscar deputado por nome..."
          :value="termoBusca"
          @input="termoBusca = $event.target.value"
        />
        <button class="btn btn-primary" @click="buscarDeputados()">
          Buscar
        </button>
      </div>

      <div v-if="carregando" class="text-center">
        <div class="spinner-border">
          <span class="visually-hidden">Carregando</span>
        </div>
      </div>

      <div v-else>
        <p v-if="deputados.length === 0" class="text-center text-muted">
          Nenhum deputado encontrado.
        </p>

        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          <div class="col" v-for="deputado in deputados" :key="deputado.id">
            <card-deputado
              :id="deputado.id"
              :foto="deputado.urlFoto"
              :nome="deputado.nome"
              :partido="deputado.siglaPartido"
              :uf="deputado.siglaUf"
              @selecionar-deputado="lidarComSelecao"
            />
          </div>
        </div>
      </div>
    </div>

    <detalhe-deputado-component
      v-if="idSelecionado !== null"
      :id="idSelecionado"
      @voltar="voltarParaLista"
    />
  </div>
</template>

<script>
import CardDeputado from "./CardDeputado.vue";
import DetalheDeputadoComponent from "./DetalheDeputadoComponent.vue";

export default {
  name: "ListaDeputadosComponent",
  components: {
    CardDeputado,
    DetalheDeputadoComponent,
  },
  data() {
    return {
      deputados: [],
      idSelecionado: null,
      carregando: true,
      termoBusca: "",
    };
  },
  mounted() {
    this.buscarDeputados();
  },
  methods: {
    async buscarDeputados() {
      try {
        this.carregando = true;
        let url =
          "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome&itens=100";

        if (this.termoBusca !== "") {
          url += `&nome=${this.termoBusca}`;
        }

        const resposta = await fetch(url);
        const json = await resposta.json();
        this.deputados = json.dados;
        this.carregando = false;
      } catch (error) {
        console.error("Erro na API de deputados: ", error);
        this.carregando = false;
      }
    },
    lidarComSelecao(idRecebido) {
      this.idSelecionado = idRecebido;
    },
    voltarParaLista() {
      this.idSelecionado = null;
    },
  },
};
</script>

<style scoped>
.titulo {
  color: #1d4e89;
}

.campo-busca {
  width: 300px;
  margin-right: 8px;
  padding: 8px 12px;
  border: 1px solid #1d4e89;
  border-radius: 6px;
}
</style>