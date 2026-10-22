<template>
  <div class="container mt-4">
    <ListaDeputadosComponent />
  </div>
</template>

<script>
import ListaDeputadosComponent from "./components/ListaDeputadosComponent.vue";

export default {
  name: "App",
  components: {
    ListaDeputadosComponent,
  },
};
</script>
