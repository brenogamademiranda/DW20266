<template>
  <div id="app-wrapper">
    <!-- HEADER -->
    <header class="site-header">
      <div class="container d-flex align-items-center justify-content-between py-3">
        <div class="d-flex align-items-center gap-2">
          <span class="portal-icon">🌀</span>
          <span class="brand-name">Rick <span class="amp">&amp;</span> Morty</span>
        </div>
        <nav>
          <span class="badge bg-success">API Oficial</span>
        </nav>
      </div>
    </header>

    <!-- HERO -->
    <section class="hero-section text-center py-5">
      <div class="container">
        <h1 class="display-5 fw-bold hero-title">Personagens do Multiverso</h1>
        <p class="lead hero-sub">
          Explore todos os personagens da série usando a
          <a href="https://rickandmortyapi.com" target="_blank" class="api-link">
            Rick and Morty API
          </a>
        </p>
      </div>
    </section>

    <!-- CONTEÚDO PRINCIPAL -->
    <main class="container py-4">
      <ListaPersonagensComponent />
    </main>

    <!-- FOOTER -->
    <footer class="site-footer text-center py-3">
      <p class="mb-0 text-secondary">
        Dados fornecidos pela
        <a href="https://rickandmortyapi.com" target="_blank" class="api-link">
          rickandmortyapi.com
        </a>
        · Desenvolvido com Vue 3
      </p>
    </footer>
  </div>
</template>

<script>
import ListaPersonagensComponent from './components/ListaPersonagensComponent.vue'

export default {
  name: 'App',
  components: {
    ListaPersonagensComponent
  }
}
</script>

<style scoped>
#app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Outfit', sans-serif;
  background-color: #0d1117;
  color: #e6edf3;
}

.site-header {
  background: linear-gradient(135deg, #161b22 0%, #0d1117 100%);
  border-bottom: 2px solid #39d353;
  position: sticky;
  top: 0;
  z-index: 100;
}

.portal-icon {
  font-size: 1.8rem;
  animation: spin 6s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.brand-name {
  font-size: 1.4rem;
  font-weight: 800;
  color: #39d353;
  letter-spacing: 0.5px;
}

.amp {
  color: #58a6ff;
}

.hero-section {
  background: linear-gradient(180deg, #161b22 0%, #0d1117 100%);
  border-bottom: 1px solid #21262d;
}

.hero-title {
  color: #39d353;
  text-shadow: 0 0 20px rgba(57, 211, 83, 0.4);
  margin-bottom: 0.5rem;
}

.hero-sub {
  color: #8b949e;
}

.api-link {
  color: #58a6ff;
  text-decoration: none;
}

.api-link:hover {
  text-decoration: underline;
  color: #79c0ff;
}

.site-footer {
  margin-top: auto;
  background: #161b22;
  border-top: 1px solid #21262d;
}
</style>
