<template>
  <div>
    <header>
         <p>Seja Bem Vindo; {{ nome }}</p>

<img src="urlImgFlamengo" alt="Bem-vindo"
widht="200" 
  height="200">
    </header>
    <p>Seja Bem Vindo </p>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  data() {
    return {
        nome: "Breno ",
        altura: 150,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7RIRYa2oqu6DZKXoRYITYu_1myoKOXXWL3xjw3vEeA&s=10"
    };
  },
  mounted(){
    setTimeout(()) => {
        this.urlImgFlamengo =
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7RIRYa2oqu6DZKXoRYITYu_1myoKOXXWL3xjw3vEeA&s=10"

    }, 5 * 1000);
  },
};
</script>

