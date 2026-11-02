<template>
  <article class="card-personagem h-100">
    <!-- Foto do personagem -->
    <img
      :src="personagem.image"
      :alt="personagem.name"
      class="card-img"
    />

    <!-- Corpo do card -->
    <div class="card-body-custom">
      <!-- Nome -->
      <h2 class="personagem-nome">{{ personagem.name }}</h2>

      <!-- Espécie -->
      <p class="personagem-especie">{{ personagem.species }}</p>

      <!-- Localização -->
      <div class="info-row">
        <span class="info-label">📍 Localização</span>
        <span class="info-valor">{{ personagem.location.name }}</span>
      </div>

      <!-- Origem -->
      <div class="info-row">
        <span class="info-label">🌍 Origem</span>
        <span class="info-valor">{{ personagem.origin.name }}</span>
      </div>

      <!-- Status (vivo / morto / unknown) -->
      <div class="status-row">
        <span
          class="status-dot"
          :class="getStatusClasse(personagem.status)"
        ></span>
        <span class="status-texto" :class="getStatusClasse(personagem.status)">
          {{ getStatusLabel(personagem.status) }}
        </span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CardPersonagem',

  // Recebe o objeto "personagem" do componente pai
  props: {
    personagem: {
      type: Object,
      required: true
    }
  },

  methods: {
    // Retorna a classe CSS de acordo com o status — usa v-bind(:class)
    getStatusClasse(status) {
      if (status === 'Alive')   return 'status-vivo'
      if (status === 'Dead')    return 'status-morto'
      return 'status-desconhecido'
    },

    // Retorna o rótulo em português para exibição
    getStatusLabel(status) {
      if (status === 'Alive')   return 'Vivo'
      if (status === 'Dead')    return 'Morto'
      return 'Desconhecido'
    }
  }
}
</script>

<style scoped>
/* ===========================
   CARD CONTAINER
   =========================== */
.card-personagem {
  background: #161b22;
  border: 1px solid #21262d;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.card-personagem:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(57, 211, 83, 0.2);
  border-color: #39d353;
}

/* ===========================
   IMAGEM
   =========================== */
.card-img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
}

/* ===========================
   CORPO DO CARD
   =========================== */
.card-body-custom {
  padding: 1rem 1.1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  flex: 1;
}

/* Nome */
.personagem-nome {
  font-size: 1.05rem;
  font-weight: 700;
  color: #e6edf3;
  margin: 0;
  line-height: 1.3;
}

/* Espécie */
.personagem-especie {
  font-size: 0.8rem;
  color: #8b949e;
  margin: 0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

/* ===========================
   LINHAS DE INFORMAÇÃO
   =========================== */
.info-row {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.info-label {
  font-size: 0.72rem;
  color: #6e7681;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-valor {
  font-size: 0.85rem;
  color: #c9d1d9;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ===========================
   STATUS (ícone visual vivo/morto)
   =========================== */
.status-row {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.3rem;
}

/* Ponto colorido — elemento visual principal do status */
.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.status-texto {
  font-size: 0.82rem;
  font-weight: 600;
}

/* Vivo → verde */
.status-vivo.status-dot        { background-color: #39d353; box-shadow: 0 0 6px rgba(57, 211, 83, 0.7); }
.status-vivo.status-texto      { color: #39d353; }

/* Morto → vermelho */
.status-morto.status-dot       { background-color: #f85149; box-shadow: 0 0 6px rgba(248, 81, 73, 0.7); }
.status-morto.status-texto     { color: #f85149; }

/* Desconhecido → cinza */
.status-desconhecido.status-dot  { background-color: #6e7681; }
.status-desconhecido.status-texto { color: #8b949e; }

/* ===========================
   RESPONSIVIDADE
   =========================== */
@media (max-width: 576px) {
  .personagem-nome {
    font-size: 0.95rem;
  }
}
</style>
