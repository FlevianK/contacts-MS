<template>
  <div class="hello">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
  background-color: blue;
  padding: 20px;
  color: white;
  }
</style>
