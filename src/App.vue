<template>
  <div id="app">
    <Header msg="Halloa!!"/>
    <ContentSection/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ContentSection from './components/ContentSection.vue'

export default {
  name: 'app',
  components: {
    Header,
    ContentSection
  }
}
</script>

<style>
#app {
  height: 960px;
  background-color: rgb(234, 234, 240);
}
</style>
