<template>
  <div class="livro-item">
    <h3>{{ livro.titulo }}</h3>
    <p><strong>Autor:</strong> {{ livro.autor }}</p>
    <p><strong>Gênero:</strong> {{ livro.genero }}</p>
    <p><strong>Ano:</strong> {{ livro.ano }}</p>
    <p><strong>Avaliação:</strong> {{ livro.avaliacao }}/5</p>
  </div>
</template>

<script>
export default {
  props: ['livro']
}
</script>

<style scoped>
.livro-item {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
