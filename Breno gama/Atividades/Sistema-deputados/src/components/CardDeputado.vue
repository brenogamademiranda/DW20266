<template>
  <div class="card h-100 shadow-sm clickImg" @click="selecionaCard">
    <img class="rounded-circle mx-auto mt-4" :src="foto" :alt="nome" />
    <div class="card-body text-center">
      <h5 class="card-title">{{ nome }}</h5>
      <h6 class="card-subtitle mb-2 partido">{{ partido }} - {{ uf }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDeputado",
  emits: ["selecionar-deputado"],
  props: {
    id: Number,
    foto: String,
    nome: String,
    partido: String,
    uf: String,
  },
  methods: {
    selecionaCard() {
      this.$emit("selecionar-deputado", this.id);
    },
  },
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 3px solid #f2b705;
}

.card {
  border-top: 4px solid #1d4e89;
  border-radius: 12px;
}

.card-title {
  color: #14365f;
}

.partido {
  color: #1d4e89;
  font-weight: bold;
}

.clickImg {
  cursor: pointer;
  transition: 0.5s;
}
</style>