<template>
  <div>
    <h1>Catálogo de Livros</h1>
    <LivroForm @livro-adicionado="fetchLivros" />
    <div v-if="livros.length">
      <LivroItem v-for="livro in livros" :key="livro.id" :livro="livro" />
    </div>
  </div>
</template>

<script>
import LivroItem from './components/LivroItem.vue';
import LivroForm from './components/LivroForm.vue';

export default {
  components: {
    LivroItem,
    LivroForm
  },
  data() {
    return {
      livros: []
    }
  },
  methods: {
    async fetchLivros() {
      const response = await fetch('http://localhost:3000/api/livros');
      const data = await response.json();
      this.livros = data;
    }
  },
  created() {
    this.fetchLivros();
  }
}
</script>
