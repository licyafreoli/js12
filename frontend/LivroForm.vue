<template>
  <form @submit.prevent="adicionarLivro">
    <input v-model="novoLivro.titulo" placeholder="Título" required />
    <input v-model="novoLivro.autor" placeholder="Autor" required />
    <input v-model="novoLivro.genero" placeholder="Gênero" required />
    <input v-model="novoLivro.ano" placeholder="Ano" type="number" required />
    <input v-model="novoLivro.avaliacao" placeholder="Avaliação" type="number" max="5" min="1" required />
    <button type="submit">Adicionar Livro</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      novoLivro: {
        titulo: '',
        autor: '',
        genero: '',
        ano: '',
        avaliacao: ''
      }
    }
  },
  methods: {
    async adicionarLivro() {
      const response = await fetch('http://localhost:3000/api/livros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.novoLivro)
      });
      if (response.ok) {
        this.$emit('livro-adicionado');
        this.novoLivro = {
          titulo: '',
          autor: '',
          genero: '',
          ano: '',
          avaliacao: ''
        };
      }
    }
  }
}
</script>
